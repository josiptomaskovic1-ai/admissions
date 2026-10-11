import type { MetadataRoute } from 'next';
import { publicLaunchReady, siteUrl } from './site-config';

export default function robots(): MetadataRoute.Robots {
  return publicLaunchReady
    ? { rules: { userAgent: '*', allow: '/', disallow: '/*/book' }, sitemap: `${siteUrl}/sitemap.xml` }
    : { rules: { userAgent: '*', disallow: '/' } };
}

