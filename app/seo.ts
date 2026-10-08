import type { Metadata } from 'next';
import type { Locale } from './content';
import { localeMeta, locales } from './i18n';
import { brandName, publicLaunchReady, siteUrl } from './site-config';

export type SeoSuffix = '' | '/contact' | '/privacy' | '/service-information';

type SeoEntry = { title: string; description: string };

const seoCopy: Record<Locale, Record<SeoSuffix, SeoEntry>> = {
  hr: {
    '': {
      title: 'Studij u inozemstvu i prijave na fakultete',
      description: 'Adria Admissions pruža neovisno savjetovanje za studij u inozemstvu, odabir programa, prijave na europska sveučilišta i stipendije.',
    },
    '/contact': {
      title: 'Besplatni razgovor za studij u inozemstvu',
      description: 'Ispunite kratki upitnik i rezervirajte besplatni razgovor od 15 minuta o studiju u inozemstvu, prijavama, rokovima i stipendijama.',
    },
    '/service-information': {
      title: 'Savjetovanje za prijave na fakultete u Europi',
      description: 'Saznajte kako Adria Admissions pristupa odabiru studija, strategiji prijave, dokumentima, stipendijama i rokovima za europska sveučilišta.',
    },
    '/privacy': {
      title: 'Privatnost i kolačići',
      description: 'Informacije o privatnosti, nužnim tehničkim kolačićima te obradi podataka putem Google Forms i Calendly usluga.',
    },
  },
  bs: {
    '': {
      title: 'Studij u inostranstvu i prijave na fakultete',
      description: 'Adria Admissions pruža nezavisno savjetovanje za studij u inostranstvu, izbor programa, prijave na evropske univerzitete i stipendije.',
    },
    '/contact': {
      title: 'Besplatan razgovor za studij u inostranstvu',
      description: 'Ispunite kratki upitnik i rezervišite besplatan razgovor od 15 minuta o studiju u inostranstvu, prijavama, rokovima i stipendijama.',
    },
    '/service-information': {
      title: 'Savjetovanje za prijave na fakultete u Evropi',
      description: 'Saznajte kako Adria Admissions pristupa izboru studija, strategiji prijave, dokumentima, stipendijama i rokovima za evropske univerzitete.',
    },
    '/privacy': {
      title: 'Privatnost i kolačići',
      description: 'Informacije o privatnosti, neophodnim tehničkim kolačićima i obradi podataka putem Google Forms i Calendly usluga.',
    },
  },
  sr: {
    '': {
      title: 'Studije u inostranstvu i prijave na fakultete',
      description: 'Adria Admissions pruža nezavisno savetovanje za studije u inostranstvu, izbor programa, prijave na evropske fakultete i stipendije.',
    },
    '/contact': {
      title: 'Besplatan razgovor za studije u inostranstvu',
      description: 'Popunite kratak upitnik i rezervišite besplatan razgovor od 15 minuta o studijama u inostranstvu, prijavama, rokovima i stipendijama.',
    },
    '/service-information': {
      title: 'Savetovanje za prijave na fakultete u Evropi',
      description: 'Saznajte kako Adria Admissions pristupa izboru studija, strategiji prijave, dokumentima, stipendijama i rokovima za evropske fakultete.',
    },
    '/privacy': {
      title: 'Privatnost i kolačići',
      description: 'Informacije o privatnosti, neophodnim tehničkim kolačićima i obradi podataka putem Google Forms i Calendly usluga.',
    },
  },
  en: {
    '': {
      title: 'Study Abroad in Europe & University Applications',
      description: 'Adria Admissions provides independent guidance for European bachelor’s, master’s and scholarship applications, from programme selection to final review.',
    },
    '/contact': {
      title: 'Free Study Abroad Consultation',
      description: 'Complete the short questionnaire and book a free 15-minute call about studying abroad, university applications, deadlines and scholarships.',
    },
    '/service-information': {
      title: 'European University Application Guidance',
      description: 'See how Adria Admissions approaches programme selection, application strategy, documents, scholarships and deadlines across Europe.',
    },
    '/privacy': {
      title: 'Privacy & Cookies',
      description: 'Information about privacy, essential technical cookies and data processing through Google Forms and Calendly services.',
    },
  },
  de: {
    '': {
      title: 'Studium im Ausland & Hochschulbewerbungen',
      description: 'Adria Admissions bietet unabhängige Beratung für ein Studium im Ausland sowie Bachelor-, Master- und Stipendienbewerbungen in Europa.',
    },
    '/contact': {
      title: 'Kostenloses Erstgespräch zum Auslandsstudium',
      description: 'Füllen Sie den kurzen Fragebogen aus und buchen Sie ein kostenloses 15-minütiges Gespräch zu Studium, Bewerbung, Fristen und Stipendien.',
    },
    '/service-information': {
      title: 'Beratung für Hochschulbewerbungen in Europa',
      description: 'So begleitet Adria Admissions Studienwahl, Bewerbungsstrategie, Unterlagen, Stipendien und Fristen für europäische Hochschulen.',
    },
    '/privacy': {
      title: 'Datenschutz & Cookies',
      description: 'Informationen zu Datenschutz, technisch notwendigen Cookies und zur Datenverarbeitung über Google Forms und Calendly.',
    },
  },
  fr: {
    '': {
      title: 'Étudier à l’étranger & candidatures universitaires',
      description: 'Adria Admissions propose un accompagnement indépendant pour étudier à l’étranger et préparer des candidatures et bourses en Europe.',
    },
    '/contact': {
      title: 'Entretien gratuit pour étudier à l’étranger',
      description: 'Remplissez le court questionnaire et réservez un entretien gratuit de 15 minutes sur les études, candidatures, délais et bourses.',
    },
    '/service-information': {
      title: 'Accompagnement des candidatures en Europe',
      description: 'Découvrez l’approche d’Adria Admissions pour le choix des études, la stratégie, les documents, les bourses et les délais en Europe.',
    },
    '/privacy': {
      title: 'Confidentialité & cookies',
      description: 'Informations sur la confidentialité, les cookies techniques essentiels et le traitement des données via Google Forms et Calendly.',
    },
  },
};

export function languageAlternates(suffix: SeoSuffix = ''): Record<string, string> {
  const entries = locales.map((locale) => [localeMeta[locale].hrefLang, `${siteUrl}/${locale}${suffix}`]);
  return Object.fromEntries([...entries, ['x-default', `${siteUrl}/sr${suffix}`]]);
}

export function localizedSeo(locale: Locale, suffix: SeoSuffix = ''): SeoEntry {
  return seoCopy[locale][suffix];
}

export function pageStructuredData(locale: Locale, suffix: Exclude<SeoSuffix, ''>) {
  const seo = localizedSeo(locale, suffix);
  const url = `${siteUrl}/${locale}${suffix}`;
  const pageId = `${url}#webpage`;
  const breadcrumbId = `${url}#breadcrumb`;
  const pageType = suffix === '/contact' ? 'ContactPage' : 'WebPage';

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': pageType,
        '@id': pageId,
        url,
        name: `${brandName} | ${seo.title}`,
        description: seo.description,
        isPartOf: { '@id': `${siteUrl}/#website` },
        about: { '@id': suffix === '/service-information' ? `${siteUrl}/${locale}#admissions-advisory` : `${siteUrl}/#organization` },
        breadcrumb: { '@id': breadcrumbId },
        inLanguage: localeMeta[locale].hrefLang,
      },
      {
        '@type': 'BreadcrumbList',
        '@id': breadcrumbId,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: brandName, item: `${siteUrl}/${locale}` },
          { '@type': 'ListItem', position: 2, name: seo.title, item: url },
        ],
      },
    ],
  };
}

export function pageMetadata(locale: Locale, suffix: SeoSuffix = '', index = true): Metadata {
  const seo = localizedSeo(locale, suffix);
  const canonical = `${siteUrl}/${locale}${suffix}`;
  const title = `${brandName} | ${seo.title}`;
  const alternateLocale = locales
    .filter((item) => item !== locale)
    .map((item) => localeMeta[item].openGraph);

  return {
    title: { absolute: title },
    description: seo.description,
    alternates: { canonical, languages: languageAlternates(suffix) },
    robots: publicLaunchReady && index
      ? {
          index: true,
          follow: true,
          googleBot: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large', 'max-video-preview': -1 },
        }
      : { index: false, follow: true, nocache: true },
    openGraph: {
      type: 'website',
      url: canonical,
      siteName: brandName,
      locale: localeMeta[locale].openGraph,
      alternateLocale,
      title,
      description: seo.description,
      images: [{ url: `${siteUrl}/og.png`, width: 1200, height: 630, alt: `${brandName} — study abroad advisory` }],
    },
    twitter: { card: 'summary_large_image', title, description: seo.description, images: [`${siteUrl}/og.png`] },
  };
}
