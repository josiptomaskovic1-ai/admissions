import type { Metadata } from 'next';
import { Manrope, Syne } from 'next/font/google';
import './globals.css';

const manrope = Manrope({
  variable: '--font-body',
  subsets: ['latin'],
});

const syne = Syne({
  variable: '--font-display',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'),
  title: {
    default: 'Virela Admissions — Clarity for every step',
    template: '%s | Virela Admissions',
  },
  description: 'Nezavisno, individualno savjetovanje za međunarodne bachelor i master prijave — za Balkan i dijasporu.',
  keywords: ['university admissions', 'studije u inostranstvu', 'prijave na fakultet', 'scholarships', 'Balkan'],
  icons: { icon: '/favicon.svg' },
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

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="bs">
      <body className={`${manrope.variable} ${syne.variable}`}>{children}</body>
    </html>
  );
}
