import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Virela Admissions',
    short_name: 'Virela',
    description:
      'Nezavisno, individualno savjetovanje za međunarodne bachelor i master prijave — za Balkan i dijasporu.',
    start_url: '/',
    display: 'standalone',
    background_color: '#eef5f4',
    theme_color: '#071d2b',
    lang: 'bs',
    icons: [{ src: '/favicon.svg', sizes: 'any', type: 'image/svg+xml' }],
  };
}
