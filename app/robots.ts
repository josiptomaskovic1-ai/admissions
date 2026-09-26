import type { MetadataRoute } from 'next';
import { publicLaunchReady, siteUrl } from './site-config';

export default function robots(): MetadataRoute.Robots {
  return publicLaunchReady
    ? { rules: { userAgent: '*', allow: '/' }, sitemap: `${siteUrl}/sitemap.xml`, host: siteUrl }
    : { rules: { userAgent: '*', disallow: '/' } };
}

