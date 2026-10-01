const origin = process.env.AUDIT_ORIGIN ?? 'http://localhost:3000';
const locales = ['hr', 'bs', 'sr', 'en', 'de', 'fr'];
const pageSuffixes = ['', '/contact', '/privacy', '/service-information'];
const failures = [];
const checked = new Map();
const homepageExpectations = {
  hr: ['15 min', 'Besplatno', '70 €', '350 €', '390 €', '590 €', '1.400 €'],
  bs: ['15 min', 'Besplatno', '70 €', '350 €', '390 €', '590 €', '1.400 €'],
  sr: ['15 min', 'Besplatno', '70 €', '350 €', '390 €', '590 €', '1.400 €'],
  en: ['15 min', 'Free', '€70', '€350', '€390', '€590', '€1,400'],
  de: ['15 Min.', 'Kostenlos', '70 €', '350 €', '390 €', '590 €', '1.400 €'],
  fr: ['15 min', 'Gratuit', '70 €', '350 €', '390 €', '590 €', '1 400 €'],
};
const staleTeamCopy = /upoznat ćete članove našeg tima|upoznaćete članove našeg tima|meet members of our team|lernen Sie Mitglieder unseres Teams kennen|rencontrerez des membres de notre équipe/iu;

function assert(condition, message) {
  if (!condition) failures.push(message);
}

async function read(path, options = {}) {
  const key = `${path}:${options.redirect ?? 'follow'}`;
  if (!checked.has(key)) {
    checked.set(key, fetch(`${origin}${path}`, options).then(async (response) => ({
      response,
      text: await response.text(),
    })));
  }
  return checked.get(key);
}

const root = await read('/', { redirect: 'manual' });
assert([301, 302, 307, 308].includes(root.response.status), `Root must redirect; received ${root.response.status}`);
assert(root.response.headers.get('location') === '/sr', `Root must redirect to /sr; received ${root.response.headers.get('location')}`);
assert((root.response.headers.get('cache-control') ?? '').includes('max-age=300'), 'Root redirect must be browser-cacheable');

for (const locale of locales) {
  for (const suffix of pageSuffixes) {
    const path = `/${locale}${suffix}`;
    const { response, text } = await read(path);
    assert(response.status === 200, `${path} returned ${response.status}`);
    const cacheControl = response.headers.get('cache-control') ?? '';
    assert(cacheControl.includes('max-age=300'), `${path} is missing short browser caching`);
    assert(cacheControl.includes('s-maxage=31536000'), `${path} is missing long-lived edge caching`);
    assert((response.headers.get('content-security-policy') ?? '').includes("frame-ancestors 'none'"), `${path} is missing the anti-framing CSP`);
    assert(response.headers.get('x-content-type-options') === 'nosniff', `${path} is missing MIME-sniffing protection`);
    assert(response.headers.get('x-frame-options') === 'DENY', `${path} is missing clickjacking protection`);
    assert((response.headers.get('permissions-policy') ?? '').includes('camera=()'), `${path} is missing the restrictive permissions policy`);
    assert(response.headers.get('referrer-policy') === 'strict-origin-when-cross-origin', `${path} has an unexpected referrer policy`);
    assert(text.includes('<title>Adria Admissions</title>'), `${path} must use the brand-only browser tab title`);
    assert((text.match(/<h1(?:\s|>)/g) ?? []).length === 1, `${path} must have exactly one H1`);
    assert(text.includes('<main'), `${path} is missing a main landmark`);
    assert(text.includes('<header'), `${path} is missing a header landmark`);
    assert(text.includes('<footer'), `${path} is missing a footer landmark`);
    assert(text.includes(`rel="canonical" href="https://adriaadmissions.com${path}"`), `${path} has an incorrect canonical URL`);
    assert((text.match(/hreflang=/gi) ?? []).length >= 7, `${path} is missing reciprocal language alternatives`);
    assert(text.includes('name="robots" content="noindex, nofollow, nocache"'), `${path} must stay noindex before launch readiness`);

    if (!suffix) {
      assert(text.includes('application/ld+json'), `${path} is missing structured data`);
      assert(!/20\s+min/iu.test(text), `${path} still exposes the superseded 20-minute introductory call`);
      assert(!/(?:€\s*(?:220|800|1700|1900)|(?:220|800|1[.\s,]?700|1[.\s,]?900)\s*€)/u.test(text), `${path} still exposes a superseded core price`);
      assert(!staleTeamCopy.test(text), `${path} still promises that clients meet multiple team members`);
      assert((text.match(/class="offer-row/g) ?? []).length === 6, `${path} must expose exactly six core services`);
      const methodMarkup = text.match(/class="method-line"[^>]*>([\s\S]*?)<\/ol>/)?.[1] ?? '';
      assert((methodMarkup.match(/<li/g) ?? []).length === 3, `${path} must expose exactly three process steps`);
      assert((text.match(/class="faq-list"[\s\S]*?<\/div>/)?.[0].match(/<details/g) ?? []).length === 8, `${path} must expose exactly eight focused FAQs`);
      assert(!/\[(?:unesite|insert|placeholder|statistic|testimonial)/iu.test(text), `${path} contains public placeholder content`);
      for (const expected of homepageExpectations[locale]) {
        assert(text.includes(expected), `${path} is missing the expected pricing/duration copy: ${expected}`);
      }
      const ids = new Set([...text.matchAll(/\sid="([^"]+)"/g)].map((match) => match[1]));
      for (const href of [...text.matchAll(/href="(#[^"]+)"/g)].map((match) => match[1])) {
        assert(ids.has(href.slice(1)), `${path} has a broken in-page link: ${href}`);
      }
    }
  }

  const booking = await read(`/${locale}/book`, { redirect: 'manual' });
  assert(booking.response.status === 307, `/${locale}/book must return 307; received ${booking.response.status}`);
  const bookingLocation = booking.response.headers.get('location');
  assert(Boolean(bookingLocation), `/${locale}/book is missing its fallback Location header`);
  if (bookingLocation) {
    try {
      const destination = new URL(bookingLocation, origin);
      assert(destination.origin === 'https://calendly.com', `/${locale}/book must redirect to Calendly; received ${destination.origin}`);
      assert(destination.pathname === '/adria-admissions' || destination.pathname.startsWith('/adria-admissions/'), `/${locale}/book must use the Adria Admissions profile; received ${destination.pathname}`);
    } catch {
      assert(false, `/${locale}/book returned an invalid Location header: ${bookingLocation}`);
    }
  }
}

const robots = await read('/robots.txt');
assert(robots.response.status === 200, '/robots.txt must return 200');
assert(/Disallow:\s*\//i.test(robots.text), 'robots.txt must block crawling before public launch');

const sitemap = await read('/sitemap.xml');
assert(sitemap.response.status === 200, '/sitemap.xml must return 200');
assert(!/<url>/i.test(sitemap.text), 'sitemap.xml must remain empty before public launch');

if (failures.length) {
  console.error(`Audit failed with ${failures.length} issue(s):`);
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log(`Audit passed: ${locales.length * pageSuffixes.length} localized pages, ${locales.length} Calendly redirects, copy regressions, security headers, metadata, anchors, robots and sitemap.`);
