import type { Locale } from '../content';
import { translations } from '../content';
import { utility } from '../i18n';
import { calendarLink, contactEmail } from '../site-config';
import { SiteFooter, SiteHeader } from './SiteChrome';

export function ContactPage({ locale }: { locale: Locale }) {
  const t = translations[locale];
  const u = utility[locale];

  return (
    <div lang={locale === 'sr' ? 'sr-Latn' : locale}>
      <SiteHeader locale={locale} page="contact" />
      <main id="main-content" className="info-page section-shell" tabIndex={-1}>
        <header className="info-hero"><p className="section-kicker">{u.contact}</p><h1>{u.contactTitle}</h1><p>{u.contactLead}</p></header>
        <div className="contact-grid">
          <section className="contact-card primary-card">
            <p className="section-kicker light">{t.booking.kicker}</p><h2>{t.booking.event}</h2><p>{t.booking.body}</p><p className="team-note">{u.teamNote}</p>
            {calendarLink ? <a className="button button-primary" href={calendarLink} target="_blank" rel="noopener noreferrer">{t.booking.button}<span className="sr-only"> — {u.external}</span><span aria-hidden="true">↗</span></a> : <span className="button disabled" aria-disabled="true">{u.unavailable}</span>}
            <small>{u.minors}</small>
          </section>
          <section className="contact-card"><p className="section-kicker">{u.contactDirect}</p><h2>{contactEmail || 'Virela Admissions'}</h2>{contactEmail ? <a className="text-link" href={`mailto:${contactEmail}`}>{contactEmail}<span aria-hidden="true">↗</span></a> : <p>{u.contactPending}</p>}<h3>{u.contactTiming}</h3><p>{u.contactTimingBody}</p></section>
          <section className="contact-card prepare-card"><p className="section-kicker">{u.contactPrepare}</p><ol>{u.contactPrepareItems.map((item, index) => <li key={item}><span>{index + 1}</span>{item}</li>)}</ol></section>
        </div>
      </main>
      <SiteFooter locale={locale} />
    </div>
  );
}

export function LegalInfoPage({ locale, kind }: { locale: Locale; kind: 'privacy' | 'service-information' }) {
  const u = utility[locale];
  const title = kind === 'privacy' ? u.privacyTitle : u.serviceTitle;
  const lead = kind === 'privacy' ? u.privacyLead : u.serviceLead;
  const sections = kind === 'privacy' ? u.privacySections : u.serviceSections;

  return (
    <div lang={locale === 'sr' ? 'sr-Latn' : locale}>
      <SiteHeader locale={locale} page={kind} />
      <main id="main-content" className="legal-page section-shell" tabIndex={-1}>
        <header className="info-hero"><p className="section-kicker">Virela Admissions</p><h1>{title}</h1><p>{lead}</p></header>
        <div className="legal-grid">{sections.map(([heading, body], index) => <section key={heading}><span>{String(index + 1).padStart(2, '0')}</span><h2>{heading}</h2><p>{body}</p></section>)}</div>
        <aside className="legal-status"><strong>{u.legalStatus}</strong></aside>
        <a className="text-link" href={`/${locale}`}>← {u.backHome}</a>
      </main>
      <SiteFooter locale={locale} />
    </div>
  );
}
