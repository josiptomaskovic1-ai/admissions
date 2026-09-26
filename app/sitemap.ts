import type { MetadataRoute } from 'next';
import { locales } from './i18n';
import { publicLaunchReady, siteUrl } from './site-config';

export default function sitemap(): MetadataRoute.Sitemap {
  if (!publicLaunchReady) return [];
  const pages = ['', '/contact', '/privacy', '/service-information'];
  return locales.flatMap((locale) => pages.map((page) => ({
    url: `${siteUrl}/${locale}${page}`,
    changeFrequency: page ? 'monthly' as const : 'weekly' as const,
    priority: page ? 0.6 : 1,
  })));
}

