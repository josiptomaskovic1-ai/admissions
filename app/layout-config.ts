import type { Metadata, Viewport } from 'next';
import { Manrope, Syne } from 'next/font/google';

const manrope = Manrope({
  variable: '--font-body',
  subsets: ['latin'],
});

const syne = Syne({
  variable: '--font-display',
  subsets: ['latin'],
});

export const bodyClassName = `${manrope.variable} ${syne.variable}`;

export const siteMetadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'https://virela-admissions.friesenjung.chatgpt.site'),
  title: {
    default: 'Virela Admissions',
    template: '%s | Virela Admissions',
  },
  description: 'Independent, one-to-one guidance for European university applications.',
  keywords: ['university admissions', 'studije u inostranstvu', 'prijave na fakultet', 'scholarships', 'European universities', 'Balkans'],
  icons: { icon: [{ url: '/favicon.ico', sizes: '32x32' }, { url: '/favicon.svg', type: 'image/svg+xml' }] },
  category: 'education',
};

export const siteViewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#071D2B',
  colorScheme: 'light',
};
