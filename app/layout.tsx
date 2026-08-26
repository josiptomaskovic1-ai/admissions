import type { Metadata } from 'next';
import { Manrope, Syne } from 'next/font/google';
import './globals.css';
import { translations } from './content';

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
const DESCRIPTION =
  'Nezavisno, individualno savjetovanje za međunarodne bachelor i master prijave — za Balkan i dijasporu.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Virela Admissions — Clarity for every step',
    template: '%s | Virela Admissions',
  },
  description: DESCRIPTION,
  alternates: {
    canonical: '/',
    languages: {
      bs: '/',
      'sr-Latn': '/',
      hr: '/',
      en: '/',
      de: '/',
      'x-default': '/',
    },
  },
  icons: {
    icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
    apple: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
  },
  openGraph: {
    type: 'website',
    locale: 'bs_BA',
    alternateLocale: ['sr_RS', 'hr_HR', 'en_GB', 'de_DE'],
    url: '/',
    siteName: 'Virela Admissions',
    title: 'Virela Admissions — Clarity for every step',
    description: 'Independent, one-to-one guidance for European university applications, serving the Balkans and diaspora.',
    images: [{
      url: '/og.png',
      width: 1731,
      height: 909,
      alt: 'Virela Admissions — Clarity for every step',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Virela Admissions — Clarity for every step',
    description: 'Independent, one-to-one guidance for European university applications.',
    images: ['/og.png'],
  },
};

// --- JSON-LD structured data (server-rendered into the initial HTML) ---
const bs = translations.bs;

const parsePrice = (p: string) => Number(p.replace(/[^0-9.]/g, '').replace(/\./g, ''));
const isRange = (p: string) => /^od\b/i.test(p.trim());

const professionalServiceLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Virela Admissions',
  url: SITE_URL,
  image: `${SITE_URL}/og.png`,
  logo: `${SITE_URL}/og.png`,
  description: DESCRIPTION,
  email: bs.footer.email,
  areaServed: ['Bosnia and Herzegovina', 'Serbia', 'Croatia', 'Europe'],
  priceRange: '€€',
  serviceType: 'University admissions consulting',
};

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: bs.faq.items.map(([q, a]) => ({
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
    name: bs.services.title,
    itemListElement: bs.services.cards.map((c) => ({
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name: c.name, description: c.desc },
      priceCurrency: 'EUR',
      ...(isRange(c.price)
        ? { priceSpecification: { '@type': 'PriceSpecification', priceCurrency: 'EUR', minPrice: parsePrice(c.price) } }
        : { price: parsePrice(c.price) }),
    })),
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="bs" suppressHydrationWarning>
      <body className={`${manrope.variable} ${syne.variable}`}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(offerCatalogLd) }} />
        {children}
      </body>
    </html>
  );
}
