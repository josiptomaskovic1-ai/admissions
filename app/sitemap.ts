import type { MetadataRoute } from 'next';
import { locales } from './i18n';
import { languageAlternates, type SeoSuffix } from './seo';
import { publicLaunchReady, siteUrl } from './site-config';

export default function sitemap(): MetadataRoute.Sitemap {
  if (!publicLaunchReady) return [];
  const pages: SeoSuffix[] = ['', '/contact', '/service-information'];
  const lastModified = new Date('2026-10-08T00:00:00.000Z');
  return locales.flatMap((locale) => pages.map((page) => ({
    url: `${siteUrl}/${locale}${page}`,
    lastModified,
    alternates: { languages: languageAlternates(page) },
  })));
}

