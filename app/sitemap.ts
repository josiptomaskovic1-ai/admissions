import type { MetadataRoute } from 'next';
import { locales } from './i18n';
import { languageAlternates, type SeoSuffix } from './seo';
import { publicLaunchReady, siteUrl } from './site-config';

export default function sitemap(): MetadataRoute.Sitemap {
  if (!publicLaunchReady) return [];
  const pages: SeoSuffix[] = ['', '/contact', '/service-information'];
  return locales.flatMap((locale) => pages.map((page) => ({
    url: `${siteUrl}/${locale}${page}`,
    alternates: { languages: languageAlternates(page) },
  })));
}

