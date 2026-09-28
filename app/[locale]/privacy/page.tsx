import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { LegalInfoPage } from '../../components/InfoPage';
import { isLocale, locales, utility } from '../../i18n';
import { pageMetadata } from '../../seo';

type Props = { params: Promise<{ locale: string }> };

export const dynamic = 'force-static';
export const revalidate = false;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const value = (await params).locale;
  const locale = isLocale(value) ? value : 'bs';
  return pageMetadata(locale, '/privacy', utility[locale].privacyTitle, utility[locale].privacyLead);
}

export default async function Privacy({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <LegalInfoPage locale={locale} kind="privacy" />;
}
