import type { Metadata } from 'next';
import type { Locale } from './content';
import { localeMeta, locales } from './i18n';
import { brandName, publicLaunchReady, siteUrl } from './site-config';

const seoCopy: Record<Locale, { title: string; description: string }> = {
  hr: { title: 'Savjetovanje za međunarodne prijave', description: 'Neovisno, individualno savjetovanje za prijediplomske i diplomske prijave u Europi — za Balkan i dijasporu.' },
  bs: { title: 'Savjetovanje za međunarodne prijave', description: 'Nezavisno, individualno savjetovanje za prijave na prvi i drugi ciklus studija u Evropi — za Balkan i dijasporu.' },
  sr: { title: 'Savetovanje za međunarodne prijave', description: 'Nezavisno, individualno savetovanje za prijave na osnovne i master studije u Evropi — za Balkan i dijasporu.' },
  en: { title: 'European university admissions guidance', description: 'Independent, one-to-one guidance for bachelor’s and master’s applications across Europe, for the Balkans and diaspora.' },
  de: { title: 'Beratung für internationale Hochschulbewerbungen', description: 'Unabhängige, persönliche Beratung für Bachelor- und Masterbewerbungen in Europa — für den Balkan und die Diaspora.' },
  fr: { title: 'Conseil pour les candidatures universitaires', description: 'Accompagnement indépendant et individuel pour les candidatures en licence et master en Europe, destiné aux Balkans et à la diaspora.' },
};

export function languageAlternates(suffix = ''): Record<string, string> {
  const entries = locales.map((locale) => [localeMeta[locale].hrefLang, `${siteUrl}/${locale}${suffix}`]);
  return Object.fromEntries([...entries, ['x-default', `${siteUrl}/sr${suffix}`]]);
}

export function pageMetadata(locale: Locale, suffix = '', title?: string, description?: string): Metadata {
  const seo = seoCopy[locale];
  const canonical = `${siteUrl}/${locale}${suffix}`;
  const pageTitle = title ?? seo.title;
  const pageDescription = description ?? seo.description;

  return {
    title: { absolute: brandName },
    description: pageDescription,
    alternates: { canonical, languages: languageAlternates(suffix) },
    robots: publicLaunchReady ? { index: true, follow: true } : { index: false, follow: false, nocache: true },
    openGraph: {
      type: 'website',
      url: canonical,
      siteName: brandName,
      locale: localeMeta[locale].hrefLang.replace('-', '_'),
      title: `${pageTitle} | ${brandName}`,
      description: pageDescription,
      images: [{ url: `${siteUrl}/og.png`, width: 1200, height: 630, alt: `${brandName} — Clarity for every step` }],
    },
    twitter: { card: 'summary_large_image', title: `${pageTitle} | ${brandName}`, description: pageDescription, images: [`${siteUrl}/og.png`] },
  };
}
