import type { Locale } from '../content';
import { translations } from '../content';
import { utility } from '../i18n';
import { brandName, calendarLink, siteUrl } from '../site-config';
import { SiteFooter, SiteHeader } from './SiteChrome';

export function HomePage({ locale }: { locale: Locale }) {
  const t = translations[locale];
  const u = utility[locale];
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: brandName,
    url: `${siteUrl}/${locale}`,
    description: t.footer.description,
    areaServed: ['Europe', 'Balkans'],
    serviceType: 'Independent university admissions guidance',
    availableLanguage: ['Bosnian', 'Croatian', 'Serbian', 'Montenegrin', 'English', 'German', 'French'],
  };

  return (
    <div lang={locale === 'sr' ? 'sr-Latn' : locale}>
      <SiteHeader locale={locale} />
      <main id="main-content" tabIndex={-1}>
        <section className="hero section-shell" id="top">
          <div className="hero-copy">
            <h1>{t.hero.titleA} <em>{t.hero.titleB}</em></h1>
            <p className="hero-lede">{t.hero.body}</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#booking">{t.hero.primary}<span aria-hidden="true">↗</span></a>
              <a className="text-link" href="#process">{t.hero.secondary}<span aria-hidden="true">↓</span></a>
            </div>
          </div>

          <aside className="route-panel" aria-label={t.route.title}>
            <div className="route-head"><span>{t.route.title}</span><span className="status"><i />{t.route.live}</span></div>
            <ol className="route-stops">
              {t.route.stops.map((stop, index) => (
                <li key={stop[0]}>
                  <span className="route-node">{String(index + 1).padStart(2, '0')}</span>
                  <span><strong>{stop[0]}</strong><small>{stop[1]}</small></span>
                </li>
              ))}
            </ol>
            <p>{t.route.note}</p>
            <div className="route-foot"><span>{t.route.next}</span><strong>{t.route.free}</strong></div>
          </aside>
        </section>

        <section className="decision-section" id="process">
          <div className="section-shell">
            <aside className="independence-band">
              <div>
                <h2>{t.principles.title}</h2>
                <p>{t.principles.body}</p>
              </div>
              <ul>
                {t.principles.labels.map((label) => <li key={label[1]}>{label[1]}</li>)}
              </ul>
            </aside>
            <div className="section-heading split-heading">
              <div><h2>{t.signals.title}</h2></div>
              <p>{t.signals.body}</p>
            </div>
            <div className="decision-grid">
              {t.signals.items.map((item) => (
                <article key={item[0]}><h3>{item[0]}</h3><p>{item[1]}</p></article>
              ))}
            </div>
            <div className="process-strip" aria-label={t.process.title}>
              {t.process.steps.map((step, index) => (
                <article key={step[0]}><span>{index + 1}</span><div><h3>{step[0]}</h3><p>{step[1]}</p></div></article>
              ))}
            </div>
          </div>
        </section>

        <section className="services-section" id="services">
          <div className="section-shell">
            <div className="section-heading services-heading">
              <div><h2>{t.services.title}</h2></div>
              <p>{t.services.body}</p>
            </div>
            <div className="service-grid">
              {t.services.cards.map((card) => (
                <article className={'featured' in card && card.featured ? 'service-card featured' : 'service-card'} key={card.name}>
                  {'featured' in card && card.featured ? <div className="service-topline"><strong>{u.core}</strong></div> : null}
                  <h3>{card.name}</h3>
                  <p className="service-price"><strong>{card.price}</strong><span>{card.meta}</span></p>
                  <p>{card.desc}</p>
                  <ul>{card.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
                  <a href="#booking">{t.services.cta}<span aria-hidden="true">↗</span></a>
                </article>
              ))}
            </div>
            <div className="pricing-band" id="pricing">
              <div className="pricing-copy"><h2>{t.pricing.title}</h2><p>{t.pricing.body}</p></div>
              <details className="price-details">
                <summary>{u.pricingDetails}<span aria-hidden="true">＋</span></summary>
                <div className="price-table-wrap">
                  <p>{u.pricingScope}</p>
                  <table><tbody>{t.pricing.table.map((row) => <tr key={row[0]}><th scope="row">{row[0]}</th><td>{row[1]}</td><td>{row[2]}</td></tr>)}</tbody></table>
                  <small>{t.pricing.note}</small>
                </div>
              </details>
            </div>
            <aside className="ethics-band"><span aria-hidden="true">↳</span><div><h3>{t.principles.ethicsTitle}</h3><p>{t.principles.ethicsBody}</p></div></aside>
          </div>
        </section>

        <section className="closing-section section-shell">
          <div className="faq-block" id="faq">
            <h2>{t.faq.title}</h2>
            <div className="faq-list">
              {t.faq.items.map((item) => (
                <details key={item[0]}><summary>{item[0]}<i aria-hidden="true">＋</i></summary><p>{item[1]}</p></details>
              ))}
            </div>
          </div>

          <aside className="booking-card" id="booking">
            <h2>{t.booking.title}</h2>
            <p>{t.booking.body}</p>
            <p className="team-note">{u.teamNote}</p>
            <dl>
              <div><dt>{t.booking.event}</dt><dd>{t.booking.duration}</dd></div>
              <div><dt>{t.booking.location}</dt><dd>{t.booking.timezone}</dd></div>
            </dl>
            {calendarLink ? (
              <a className="button button-primary booking-button" href={`/${locale}/book`} target="_blank" rel="noopener noreferrer">{t.booking.button}<span className="sr-only"> — {u.external}</span><span aria-hidden="true">↗</span></a>
            ) : (
              <span className="button booking-button disabled" aria-disabled="true">{u.unavailable}</span>
            )}
            <p className="booking-note">{t.booking.paid}</p>
            <a className="contact-link" href={`/${locale}/contact`}>{u.contact}<span aria-hidden="true">→</span></a>
          </aside>
        </section>
      </main>
      <SiteFooter locale={locale} />
      <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
    </div>
  );
}
