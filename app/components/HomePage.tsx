import type { Locale } from '../content';
import { homeContent } from '../home-content';
import { utility } from '../i18n';
import { brandName, intakeFormLinks, siteUrl } from '../site-config';
import { IntakeGate } from './IntakeGate';
import { SiteFooter, SiteHeader } from './SiteChrome';

export function HomePage({ locale }: { locale: Locale }) {
  const t = homeContent[locale];
  const u = utility[locale];
  const intakeFormLink = intakeFormLinks[locale];
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: brandName,
    url: `${siteUrl}/${locale}`,
    description: t.hero.body,
    areaServed: ['Serbia', 'Croatia', 'Bosnia and Herzegovina', 'Montenegro', 'Europe'],
    serviceType: 'Independent European university admissions strategy',
    availableLanguage: ['Bosnian', 'Croatian', 'Serbian', 'Montenegrin', 'English', 'German', 'French'],
  };

  return (
    <div lang={locale === 'sr' ? 'sr-Latn' : locale}>
      <SiteHeader locale={locale} />
      <main id="main-content" tabIndex={-1}>
        <section className="hero section-shell" id="top">
          <div className="hero-copy">
            <h1>{t.hero.title} <em>{t.hero.accent}</em></h1>
            <p className="hero-lede">{t.hero.body}</p>
            <div className="hero-actions">
              <a className="button button-primary" href={intakeFormLink} target="_blank" rel="noopener noreferrer">{t.hero.primary}<span className="sr-only"> — {u.external}</span></a>
              <a className="text-link" href="#process">{t.hero.secondary}</a>
            </div>
            <ul className="hero-proof" aria-label={t.hero.proof.join(', ')}>
              {t.hero.proof.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>

          <aside className="decision-card" aria-label={t.decision.title}>
            <div className="decision-card-head"><h2>{t.decision.title}</h2><p>{t.decision.note}</p></div>
            <dl>{t.decision.factors.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl>
            <p className="decision-card-foot">{t.decision.paid}</p>
          </aside>
        </section>

        <section className="independent-section">
          <div className="section-shell">
            <div className="section-heading split-heading"><h2>{t.independent.title}</h2><p>{t.independent.body}</p></div>
            {t.independent.statement && <p className="independence-statement">{t.independent.statement}</p>}
          </div>
        </section>

        <section className="audience-section section-shell">
          <div className="section-heading compact-heading"><h2>{t.audiences.title}</h2><p>{t.audiences.body}</p></div>
          <div className="audience-grid">
            {t.audiences.groups.map((group) => <article key={group.title}><h3>{group.title}</h3><p>{group.lead}</p><ul>{group.points.map((point) => <li key={point}>{point}</li>)}</ul></article>)}
          </div>
        </section>

        <section className="value-section section-shell" id="experience">
          <div className="value-copy"><h2>{t.value.title}</h2><p>{t.value.body}</p></div>
          <div className="value-points">{t.value.points.map(([title, body]) => <article key={title}><h3>{title}</h3><p>{body}</p></article>)}</div>
        </section>

        <section className="method-section" id="process">
          <div className="section-shell">
            <div className="section-heading split-heading inverse-heading"><h2>{t.method.title}</h2><p>{t.method.body}</p></div>
            <ol className="method-line">{t.method.steps.map(([title, body], index) => <li key={title}><span>{index + 1}</span><div><h3>{title}</h3><p>{body}</p></div></li>)}</ol>
          </div>
        </section>

        <section className="sample-section section-shell" id="sample">
          <div className="section-heading split-heading"><h2>{t.sample.title}</h2><p>{t.sample.body}</p></div>
          <article className="sample-document">
            <header><div><span>{t.sample.badge}</span><h3>{t.sample.documentTitle}</h3></div><p>{t.sample.documentMeta}</p></header>
            <div className="sample-table" role="table" aria-label={t.sample.documentTitle}>
              {t.sample.rows.map(([programme, fit, risk]) => <div role="row" key={programme}><strong role="cell">{programme}</strong><span role="cell">{fit}</span><span role="cell">{risk}</span></div>)}
            </div>
            <ul className="sample-checks">{t.sample.timeline.map((item) => <li key={item}>{item}</li>)}</ul>
            <p className="sample-note">{t.sample.note}</p>
          </article>
        </section>

        <section className="offers-section" id="services">
          <div className="section-shell">
            <div className="section-heading split-heading inverse-heading"><h2>{t.offers.title}</h2><p>{t.offers.body}</p></div>
            <div className="offer-list" id="pricing">
              {t.offers.cards.map((offer) => (
                <details className={offer.featured ? 'offer-row featured' : 'offer-row'} key={offer.name}>
                  <summary>
                    <span className="offer-identity"><strong>{offer.name}</strong><small>{offer.label}</small></span>
                    <span className="offer-best"><small>{t.offers.bestFor}</small>{offer.bestFor}</span>
                    <span className="offer-price"><strong>{offer.price}</strong><small>{offer.meta}</small></span>
                    <span className="offer-toggle" aria-hidden="true" />
                  </summary>
                  <div className="offer-detail">
                    <p>{offer.summary}</p>
                    <div><strong>{t.offers.includes}</strong><ul>{offer.includes.map((item) => <li key={item}>{item}</li>)}</ul></div>
                    <div><strong>{t.offers.limits}</strong><ul>{offer.limits.map((item) => <li key={item}>{item}</li>)}</ul></div>
                  </div>
                </details>
              ))}
            </div>
            <a className="button button-primary pricing-cta" href={intakeFormLink} target="_blank" rel="noopener noreferrer">{t.offers.cta}<span className="sr-only"> — {u.external}</span></a>

            <div className="pricing-policy">
              <div className="pricing-intro"><h2>{t.pricing.title}</h2><p>{t.pricing.body}</p><p className="credit-note">{t.pricing.credit}</p></div>
              <div className="addon-table"><h3>{t.pricing.addonsTitle}</h3><dl>{t.pricing.addons.map(([name, scope, price]) => <div key={name}><dt><strong>{name}</strong><small>{scope}</small></dt><dd>{price}</dd></div>)}</dl></div>
              <div className="instalment-note"><h3>{t.pricing.instalmentsTitle}</h3><ul>{t.pricing.instalments.map((item) => <li key={item}>{item}</li>)}</ul></div>
            </div>
          </div>
        </section>

        <section className="trust-section">
          <div className="section-shell trust-layout">
            <div><h2>{t.trust.title}</h2><p>{t.trust.body}</p></div>
            <dl>{t.trust.items.map(([title, body]) => <div key={title}><dt>{title}</dt><dd>{body}</dd></div>)}</dl>
            <p className="trust-note">{t.trust.note}</p>
          </div>
        </section>

        <section className="closing-section section-shell">
          <div className="faq-block" id="faq">
            <h2>{t.faq.title}</h2>
            <div className="faq-list">{t.faq.items.map(([question, answer]) => <details key={question}><summary>{question}<span aria-hidden="true" /></summary><p>{answer}</p></details>)}</div>
          </div>
          <aside className="booking-card" id="booking">
            <h2>{t.booking.title}</h2><p>{t.booking.body}</p><p className="team-note">{t.booking.team}</p>
            <dl><div><dt>{t.booking.event}</dt><dd>{t.booking.duration}</dd></div><div><dt>{t.booking.location}</dt><dd>{t.booking.timezone}</dd></div></dl>
            <IntakeGate locale={locale} />
            <p className="booking-note">{t.booking.note}</p>
            <a className="contact-link" href={`/${locale}/contact`}>{u.contact}</a>
          </aside>
        </section>
      </main>
      <SiteFooter locale={locale} />
      <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
    </div>
  );
}
