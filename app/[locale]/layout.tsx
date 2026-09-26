import type { Metadata, Viewport } from 'next';
import { bodyClassName, siteMetadata, siteViewport } from '../layout-config';
import { isLocale, localeMeta, locales } from '../i18n';
import '../globals.css';

export const metadata: Metadata = siteMetadata;
export const viewport: Viewport = siteViewport;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: Readonly<{ children: React.ReactNode; params: Promise<{ locale: string }> }>) {
  const { locale } = await params;
  const htmlLang = isLocale(locale) ? localeMeta[locale].html : 'bs';

  return (
    <html lang={htmlLang}>
      <body className={bodyClassName}>{children}</body>
    </html>
  );
}
