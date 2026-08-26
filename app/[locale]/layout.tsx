import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Manrope, Syne } from 'next/font/google';
import '../globals.css';
import { Locale, translations } from '../content';

const manrope = Manrope({
  variable: '--font-body',
  subsets: ['latin'],
  display: 'swap',
});

const syne = Syne({
  variable: '--font-display',
  subsets: ['latin'],
  display: 'swap',
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';

export const LOCALES: Locale[] = ['bs', 'sr', 'hr', 'en', 'de'];

const htmlLang: Record<Locale, string> = {
  bs: 'bs',
  sr: 'sr-Latn',
  hr: 'hr',
  en: 'en',
  de: 'de',
};

const ogLocale: Record<Locale, string> = {
  bs: 'bs_BA',
  sr: 'sr_RS',
  hr: 'hr_HR',
  en: 'en_GB',
  de: 'de_DE',
};

const isLocale = (v: string): v is Locale => (LOCALES as string[]).includes(v);

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = isLocale(locale) ? translations[locale] : translations.bs;
  const active: Locale = isLocale(locale) ? locale : 'bs';

  const languages: Record<string, string> = {};
  for (const l of LOCALES) languages[htmlLang[l]] = `/${l}`;
  languages['x-default'] = '/bs';

  const title = 'Virela Admissions — Clarity for every step';

  return {
    metadataBase: new URL(SITE_URL),
    title: { default: title, template: '%s | Virela Admissions' },
    description: t.footer.description,
    alternates: { canonical: `/${active}`, languages },
    icons: {
      icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
      apple: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
    },
    openGraph: {
      type: 'website',
      locale: ogLocale[active],
      alternateLocale: LOCALES.filter((l) => l !== active).map((l) => ogLocale[l]),
      url: `/${active}`,
      siteName: 'Virela Admissions',
      title,
      description: t.footer.description,
      images: [{ url: '/og.png', width: 1731, height: 909, alt: title }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: t.footer.description,
      images: ['/og.png'],
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{ children: React.ReactNode; params: Promise<{ locale: string }> }>) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = translations[locale];

  const parsePrice = (p: string) => Number(p.replace(/[^0-9.]/g, '').replace(/\./g, ''));
  const isRange = (p: string) => /^(od|ab|from)\b/i.test(p.trim());

  const professionalServiceLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Virela Admissions',
    url: `${SITE_URL}/${locale}`,
    image: `${SITE_URL}/og.png`,
    logo: `${SITE_URL}/og.png`,
    description: t.footer.description,
    email: t.footer.email,
    areaServed: ['Bosnia and Herzegovina', 'Serbia', 'Croatia', 'Europe'],
    priceRange: '€€',
    serviceType: 'University admissions consulting',
    inLanguage: htmlLang[locale],
  };

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    inLanguage: htmlLang[locale],
    mainEntity: t.faq.items.map(([q, a]) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  };

  const offerCatalogLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Virela Admissions consulting',
    provider: { '@type': 'ProfessionalService', name: 'Virela Admissions', url: SITE_URL },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: t.services.title,
      itemListElement: t.services.cards.map((c) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: c.name, description: c.desc },
        priceCurrency: 'EUR',
        ...(isRange(c.price)
          ? { priceSpecification: { '@type': 'PriceSpecification', priceCurrency: 'EUR', minPrice: parsePrice(c.price) } }
          : { price: parsePrice(c.price) }),
      })),
    },
  };

  return (
    <html lang={htmlLang[locale]}>
      <body className={`${manrope.variable} ${syne.variable}`}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(offerCatalogLd) }} />
        {children}
      </body>
    </html>
  );
}
