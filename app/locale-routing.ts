import type { Locale } from './content';

const countryLocales: Partial<Record<string, Locale>> = {
  AT: 'de',
  AU: 'en',
  BA: 'bs',
  DE: 'de',
  FR: 'fr',
  GB: 'en',
  HR: 'hr',
  IE: 'en',
  ME: 'sr',
  NZ: 'en',
  RS: 'sr',
  US: 'en',
};

const languageLocales: Record<string, Locale> = {
  bs: 'bs',
  de: 'de',
  en: 'en',
  fr: 'fr',
  hr: 'hr',
  sr: 'sr',
};

function localeFromAcceptLanguage(value: string | null): Locale | null {
  if (!value) return null;

  const preferences = value
    .split(',')
    .map((entry, index) => {
      const [rawTag, ...parameters] = entry.trim().split(';');
      const qualityParameter = parameters.find((parameter) => parameter.trim().startsWith('q='));
      const quality = qualityParameter ? Number.parseFloat(qualityParameter.trim().slice(2)) : 1;
      return { tag: rawTag.toLowerCase(), quality: Number.isFinite(quality) ? quality : 0, index };
    })
    .filter(({ tag, quality }) => Boolean(tag) && tag !== '*' && quality > 0)
    .sort((a, b) => b.quality - a.quality || a.index - b.index);

  for (const { tag } of preferences) {
    const language = tag.split('-', 1)[0];
    if (language in languageLocales) return languageLocales[language];
  }

  return null;
}

export function localeForRequest(headers: Headers): Locale {
  const country = headers.get('cf-ipcountry')?.trim().toUpperCase();
  if (country && country in countryLocales) return countryLocales[country] ?? 'en';

  return localeFromAcceptLanguage(headers.get('accept-language')) ?? 'en';
}

export const localeRedirectHeaders = {
  'Cache-Control': 'private, no-store, max-age=0',
  Vary: 'CF-IPCountry, Accept-Language',
};
