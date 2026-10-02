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
const localeContamination = {
  hr: /\b(?:cene|univerziteti|finansiranje|uslovi|umesto|sledeći|obim|savetovanje|inostranstvu|izveštaj)\b/iu,
  bs: /\b(?:cene|sveučilišta|financiranje|uvjeti|umesto|sledeći|izveštaj)\b/iu,
  sr: /\b(?:cijene|sveučilišta|financiranje|uvjeti|prije|sljedeći|inozemstvu|izvještaj)\b/iu,
  en: /\b(?:nächsten Zug|essais du candidat)\b/iu,
  de: /Bewerber:innen|\bGebühren \+ Leben\b|nächsten Zug|Finanzierungsbild/iu,
  fr: /essais du candidat|procédures complexes à essais multiples|la bonne aide/iu,
};

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
const rootCacheControl = root.response.headers.get('cache-control') ?? '';
assert(rootCacheControl.includes('max-age=0'), 'Root redirect must not keep stale HTML in the browser cache');
assert(rootCacheControl.includes('s-maxage=300'), 'Root redirect must use a short edge-cache lifetime');

for (const locale of locales) {
  for (const suffix of pageSuffixes) {
    const path = `/${locale}${suffix}`;
    const { response, text } = await read(path);
    assert(response.status === 200, `${path} returned ${response.status}`);
    const cacheControl = response.headers.get('cache-control') ?? '';
    assert(cacheControl.includes('max-age=0'), `${path} must not keep stale HTML in the browser cache`);
    assert(cacheControl.includes('must-revalidate'), `${path} must revalidate cached HTML`);
    assert(cacheControl.includes('s-maxage=300'), `${path} is missing short edge caching`);
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
    const inlineStyles = text.match(/<style[^>]*data-adria-styles[^>]*>([\s\S]*?)<\/style>/i)?.[1] ?? '';
    assert(inlineStyles.length > 20_000, `${path} is missing the complete inline stylesheet`);
    assert(inlineStyles.includes('--cobalt:#2f57ff') || inlineStyles.includes('--cobalt: #2f57ff'), `${path} has an incomplete inline stylesheet`);
    assert(text.includes(`rel="canonical" href="https://adriaadmissions.com${path}"`), `${path} has an incorrect canonical URL`);
    assert(text.includes('href="https://www.linkedin.com/company/adria-admissions/"'), `${path} is missing the official LinkedIn link`);
    assert(text.includes('href="https://www.instagram.com/adria.admissions/"'), `${path} is missing the official Instagram link`);
    assert((text.match(/hreflang=/gi) ?? []).length >= 7, `${path} is missing reciprocal language alternatives`);
    assert(text.includes('name="robots" content="index, follow"'), `${path} must allow public indexing`);
    assert(!/name="robots" content="[^"]*noindex/i.test(text), `${path} must not contain a noindex directive`);
    assert(!localeContamination[locale].test(text), `${path} contains wording from another locale or a known mistranslation`);

    if (suffix === '/privacy') {
      for (const cookie of ['cf_clearance', '__cf_bm', '__Host-appgarden-visitor']) {
        assert(text.includes(cookie), `${path} is missing the disclosed essential cookie: ${cookie}`);
      }
    }

    if (!suffix) {
      assert(text.includes('application/ld+json'), `${path} is missing structured data`);
      assert(!/20\s+min/iu.test(text), `${path} still exposes the superseded 20-minute introductory call`);
      assert(!/(?:€\s*(?:220|800|1700|1900)|(?:220|800|1[.\s,]?700|1[.\s,]?900)\s*€)/u.test(text), `${path} still exposes a superseded core price`);
      assert(!staleTeamCopy.test(text), `${path} still promises that clients meet multiple team members`);
      assert(!text.includes('mobile-booking-bar'), `${path} still renders the removed floating mobile booking bar`);
      assert((text.match(/class="offer-row/g) ?? []).length === 6, `${path} must expose exactly six core services`);
      assert(!/<details[^>]*class="[^"]*offer-row[^"]*"[^>]*\sopen(?:=|\s|>)/iu.test(text), `${path} must keep service details collapsed by default`);
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
assert(/Allow:\s*\//i.test(robots.text), 'robots.txt must allow public crawling');
assert(!/Disallow:\s*\//i.test(robots.text), 'robots.txt must not block the public site');

const sitemap = await read('/sitemap.xml');
assert(sitemap.response.status === 200, '/sitemap.xml must return 200');
assert((sitemap.text.match(/<url>/gi) ?? []).length === locales.length * pageSuffixes.length, 'sitemap.xml must list every localized public page');

if (failures.length) {
  console.error(`Audit failed with ${failures.length} issue(s):`);
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log(`Audit passed: ${locales.length * pageSuffixes.length} localized pages, ${locales.length} Calendly redirects, inline CSS resilience, cache safety, copy regressions, security headers, metadata, anchors, robots and sitemap.`);
