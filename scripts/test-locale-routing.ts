import assert from 'node:assert/strict';
import { localeForRequest } from '../app/locale-routing.ts';

const cases = [
  ['HR', null, 'hr'],
  ['BA', null, 'bs'],
  ['RS', null, 'sr'],
  ['ME', null, 'sr'],
  ['DE', null, 'de'],
  ['AT', null, 'de'],
  ['FR', null, 'fr'],
  ['GB', null, 'en'],
  ['US', null, 'en'],
  ['IE', null, 'en'],
  ['AU', null, 'en'],
  ['NZ', null, 'en'],
  ['CH', 'fr-CH,fr;q=0.9,de;q=0.8', 'fr'],
  [null, 'de-CH,de;q=0.9,en;q=0.8', 'de'],
  [null, 'fr-CA;q=0.7,en;q=0.9', 'en'],
  [null, 'sr-Latn-RS,sr;q=0.9', 'sr'],
  [null, 'hr-HR', 'hr'],
  [null, 'bs-BA', 'bs'],
  [null, null, 'en'],
] as const;

for (const [country, acceptLanguage, expected] of cases) {
  const headers = new Headers();
  if (country) headers.set('CF-IPCountry', country);
  if (acceptLanguage) headers.set('Accept-Language', acceptLanguage);

  assert.equal(
    localeForRequest(headers),
    expected,
    `Expected ${country ?? 'no country'} / ${acceptLanguage ?? 'no language'} to select ${expected}`,
  );
}

console.log(`Locale routing: ${cases.length} cases passed.`);
