import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Impressum / Legal notice',
  description: 'Legal notice and operator information for Virela Admissions.',
};

// NOTE: The bracketed [ … ] values below are placeholders. Replace them with the
// real registered operator details before publishing — this page is legally
// required in the German-speaking market (DDG §5 / ECG §5) and recommended EU-wide.
export default async function ImpressumPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return (
    <main className="legal-page">
      <p className="legal-back"><Link href={`/${locale}`}>← Virela Admissions</Link></p>
      <h1>Impressum / Legal notice</h1>

      <h2>Diensteanbieter / Service provider</h2>
      <p>
        [Registered legal name — e.g. Virela Admissions d.o.o. / obrt]<br />
        [Street and number]<br />
        [Postal code, City], [Country]
      </p>

      <h2>Kontakt / Contact</h2>
      <p>
        E-Mail: <a href="mailto:kontakt@virela.com">kontakt@virela.com</a><br />
        [Telephone, optional]
      </p>

      <h2>Registrierung / Registration</h2>
      <p>
        [Registration / court register no. — e.g. MBS / OIB / VAT ID]<br />
        [Represented by — responsible person(s)]
      </p>

      <h2>Verantwortlich für den Inhalt / Responsible for content</h2>
      <p>[Name of person responsible for content], [address as above]</p>

      <p className="legal-note">
        This is a template. Replace all bracketed placeholders with the real
        operator details before the site goes public.
      </p>
    </main>
  );
}
