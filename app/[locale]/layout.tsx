import type { Metadata, Viewport } from 'next';
import { bodyClassName, siteMetadata, siteViewport } from '../layout-config';
import { isLocale, localeMeta, locales } from '../i18n';
import globalStyles from '../globals.css?inline';

export const metadata: Metadata = siteMetadata;
export const viewport: Viewport = siteViewport;
export const dynamic = 'force-static';
export const dynamicParams = false;
export const revalidate = false;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: Readonly<{ children: React.ReactNode; params: Promise<{ locale: string }> }>) {
  const { locale } = await params;
  const htmlLang = isLocale(locale) ? localeMeta[locale].html : 'bs';

  return (
    <html lang={htmlLang}>
      <head>
        <style data-adria-styles>{globalStyles}</style>
      </head>
      <body className={bodyClassName}>{children}</body>
    </html>
  );
}
