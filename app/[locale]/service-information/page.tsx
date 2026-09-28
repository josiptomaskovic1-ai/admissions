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
  return pageMetadata(locale, '/service-information', utility[locale].serviceTitle, utility[locale].serviceLead);
}

export default async function ServiceInformation({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <LegalInfoPage locale={locale} kind="service-information" />;
}
