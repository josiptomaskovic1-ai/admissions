import type { Metadata, Viewport } from 'next';
import { Manrope, Syne } from 'next/font/google';
import { brandName } from './site-config';

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
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'https://adriaadmissions.com'),
  title: {
    default: brandName,
    template: `%s | ${brandName}`,
  },
  description: 'Independent, one-to-one guidance for European university applications.',
  keywords: ['university admissions', 'studije u inostranstvu', 'prijave na fakultet', 'scholarships', 'European universities', 'Balkans'],
  icons: {
    icon: [{ url: '/adria-logo.png', type: 'image/png' }],
    shortcut: '/adria-logo.png',
    apple: '/adria-logo.png',
  },
  category: 'education',
};

export const siteViewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#071D2B',
  colorScheme: 'light',
};
