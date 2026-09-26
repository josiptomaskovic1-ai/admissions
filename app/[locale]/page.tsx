import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { VirelaPage } from '../components/VirelaPage';
import { isLocale, locales } from '../i18n';
import { pageMetadata } from '../seo';

type Props = { params: Promise<{ locale: string }> };

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return pageMetadata(isLocale(locale) ? locale : 'bs');
}

export default async function LocaleHome({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <VirelaPage locale={locale} />;
}

