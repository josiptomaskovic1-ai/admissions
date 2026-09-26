const origin = process.env.AUDIT_ORIGIN ?? 'http://localhost:3000';
const locales = ['hr', 'bs', 'sr', 'en', 'de', 'fr'];
const pageSuffixes = ['', '/contact', '/privacy', '/service-information'];
const failures = [];
const checked = new Map();

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
assert(root.response.headers.get('location') === '/bs', `Root must redirect to /bs; received ${root.response.headers.get('location')}`);

for (const locale of locales) {
  for (const suffix of pageSuffixes) {
    const path = `/${locale}${suffix}`;
    const { response, text } = await read(path);
    assert(response.status === 200, `${path} returned ${response.status}`);
    assert((text.match(/<h1(?:\s|>)/g) ?? []).length === 1, `${path} must have exactly one H1`);
    assert(text.includes('<main'), `${path} is missing a main landmark`);
    assert(text.includes('<header'), `${path} is missing a header landmark`);
    assert(text.includes('<footer'), `${path} is missing a footer landmark`);
    assert(text.includes(`rel="canonical" href="https://virela-admissions.friesenjung.chatgpt.site${path}"`), `${path} has an incorrect canonical URL`);
    assert((text.match(/hreflang=/gi) ?? []).length >= 7, `${path} is missing reciprocal language alternatives`);
    assert(text.includes('name="robots" content="noindex, nofollow, nocache"'), `${path} must stay noindex before launch readiness`);

    if (!suffix) {
      assert(text.includes('application/ld+json'), `${path} is missing structured data`);
      const ids = new Set([...text.matchAll(/\sid="([^"]+)"/g)].map((match) => match[1]));
      for (const href of [...text.matchAll(/href="(#[^"]+)"/g)].map((match) => match[1])) {
        assert(ids.has(href.slice(1)), `${path} has a broken in-page link: ${href}`);
      }
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

console.log(`Audit passed: ${locales.length * pageSuffixes.length} localized pages, redirect, metadata, anchors, robots and sitemap.`);
