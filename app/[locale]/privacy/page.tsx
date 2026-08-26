import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy / Datenschutzerklärung',
  description: 'How Virela Admissions handles personal data (GDPR / DSGVO).',
};

// NOTE: Template privacy policy. Replace bracketed [ … ] placeholders and have it
// reviewed for your jurisdiction before publishing.
export default async function PrivacyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return (
    <main className="legal-page">
      <p className="legal-back"><Link href={`/${locale}`}>← Virela Admissions</Link></p>
      <h1>Privacy Policy / Datenschutzerklärung</h1>

      <h2>1. Controller</h2>
      <p>
        The controller responsible for data processing is [registered legal name],
        [address], e-mail <a href="mailto:kontakt@virela.com">kontakt@virela.com</a>.
        See the <Link href={`/${locale}/impressum`}>Impressum</Link> for full details.
      </p>

      <h2>2. What we process</h2>
      <ul>
        <li>
          <strong>Booking data.</strong> When you book an introductory call, our
          scheduling provider <strong>Cal.com</strong> processes your name, e-mail
          address and time zone as a third-party processor. See Cal.com&rsquo;s own
          privacy policy for details of their processing.
        </li>
        <li>
          <strong>Contact by e-mail.</strong> If you e-mail us, we process the
          address and content you send in order to reply.
        </li>
        <li>
          <strong>Language preference.</strong> We store a single cookie,
          <code> virela-locale</code>, to remember your language choice and route
          you to the right language version. It is not used for tracking.
        </li>
      </ul>

      <h2>3. Legal basis</h2>
      <p>
        Processing is based on Art. 6(1)(b) GDPR (steps prior to entering a
        contract) for bookings and enquiries, and Art. 6(1)(f) GDPR (legitimate
        interest in a functioning website) for the language preference.
      </p>

      <h2>4. Your rights</h2>
      <p>
        You have the right of access, rectification, erasure, restriction, data
        portability and objection, and the right to lodge a complaint with a
        supervisory authority. To exercise any of these, contact
        <a href="mailto:kontakt@virela.com"> kontakt@virela.com</a>.
      </p>

      <h2>5. Retention</h2>
      <p>[State how long enquiry and booking data are kept.]</p>

      <p className="legal-note">
        This is a template and not legal advice. Have it reviewed and complete the
        bracketed placeholders before publishing.
      </p>
    </main>
  );
}
