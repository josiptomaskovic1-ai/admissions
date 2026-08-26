import type { MetadataRoute } from 'next';

const base = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';
const LOCALES = ['bs', 'sr', 'hr', 'en', 'de'] as const;

const languagesFor = (path: string) =>
  Object.fromEntries(LOCALES.map((l) => [l, `${base}/${l}${path}`]));

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of LOCALES) {
    entries.push({
      url: `${base}/${locale}`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 1,
      alternates: { languages: languagesFor('') },
    });
    entries.push({
      url: `${base}/${locale}/impressum`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.2,
      alternates: { languages: languagesFor('/impressum') },
    });
    entries.push({
      url: `${base}/${locale}/privacy`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.2,
      alternates: { languages: languagesFor('/privacy') },
    });
  }

  return entries;
}
