'use client';

import { useEffect, useState } from 'react';
import { Locale, translations } from './content';

const languageLabels: Record<Locale, string> = {
  bs: 'BS',
  sr: 'SR',
  hr: 'HR',
  en: 'EN',
  de: 'DE',
};

const htmlLanguages: Record<Locale, string> = {
  bs: 'bs',
  sr: 'sr-Latn',
  hr: 'hr',
  en: 'en',
  de: 'de',
};

const skipLabels: Record<Locale, string> = {
  bs: 'Preskoči na sadržaj',
  sr: 'Preskoči na sadržaj',
  hr: 'Preskoči na sadržaj',
  en: 'Skip to content',
  de: 'Zum Inhalt springen',
};

const newTabLabels: Record<Locale, string> = {
  bs: '(otvara se u novoj kartici)',
  sr: '(otvara se u novoj kartici)',
  hr: '(otvara se u novoj kartici)',
  en: '(opens in a new tab)',
  de: '(öffnet in neuem Tab)',
};

const calendarLink = process.env.NEXT_PUBLIC_CAL_LINK;

export default function Home() {
  const [locale, setLocale] = useState<Locale>('bs');
  const t = translations[locale];
  const contactEmail = t.footer.email;

  useEffect(() => {
    const saved = window.localStorage.getItem('virela-locale') as Locale | null;
    const detected = navigator.language.toLowerCase().split('-')[0] as Locale;
    const next = saved && saved in translations ? saved : detected in translations ? detected : 'bs';
    // One-time sync from a browser-only external store (localStorage + navigator)
    // that cannot be read during SSR; runs only on mount.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setLocale(next);
    document.documentElement.lang = htmlLanguages[next];
  }, []);

  const changeLanguage = (next: Locale) => {
    setLocale(next);
    document.documentElement.lang = htmlLanguages[next];
    window.localStorage.setItem('virela-locale', next);
  };

  return (
    <>
      <a className="skip-link" href="#top">{skipLabels[locale]}</a>

      <header className="site-header">
        <a className="brand" href="#top" aria-label="Virela Admissions">
          <span className="brand-mark" aria-hidden="true">V</span>
          <span>
            <strong>Virela</strong>
            <small>Admissions</small>
          </span>
        </a>

        <nav className="main-nav" aria-label="Main navigation">
          <a href="#usluge">{t.nav.services}</a>
          <a href="#proces">{t.nav.process}</a>
          <a href="#cijene">{t.nav.pricing}</a>
          <a href="#pitanja">{t.nav.faq}</a>
        </nav>

        <div className="header-actions">
          <label className="language-control">
            <span className="sr-only">{t.nav.language}</span>
            <select value={locale} onChange={(event) => changeLanguage(event.target.value as Locale)}>
              {(Object.keys(translations) as Locale[]).map((key) => (
                <option value={key} key={key}>{languageLabels[key]}</option>
              ))}
            </select>
          </label>
          <a className="nav-cta" href="#booking">{t.nav.book}</a>
        </div>
      </header>

      <main>
      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span aria-hidden="true" /> {t.hero.eyebrow}</p>
          <h1>{t.hero.titleA} <em>{t.hero.titleB}</em></h1>
          <p className="hero-lede">{t.hero.body}</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#booking">
              {t.hero.primary} <span aria-hidden="true">↗</span>
            </a>
            <a className="text-link" href="#usluge">{t.hero.secondary} <span aria-hidden="true">↓</span></a>
          </div>
          <div className="trust-row" aria-label="Working principles">
            {t.trust.map((item) => <span key={item}>{item}</span>)}
          </div>
        </div>

        <div className="meridian-stage" aria-label={t.route.title}>
          <div className="coordinate coordinate-top" aria-hidden="true">45.8150° N</div>
          <div className="coordinate coordinate-side" aria-hidden="true">15.9819° E</div>
          <div className="orbit orbit-one" aria-hidden="true" />
          <div className="orbit orbit-two" aria-hidden="true" />
          <div className="axis axis-x" aria-hidden="true" />
          <div className="axis axis-y" aria-hidden="true" />
          <div className="route-card">
            <div className="route-card-head">
              <span>{t.route.title}</span>
              <span className="live-dot">{t.route.live}</span>
            </div>
            <div className="route-stops">
              {t.route.stops.map((stop, index) => (
                <div className="route-stop" key={stop[0]}>
                  <div className="stop-index">0{index + 1}</div>
                  <div className="stop-copy">
                    <strong>{stop[0]}</strong>
                    <span>{stop[1]}</span>
                  </div>
                  <span className={index === 0 ? 'stop-state active' : 'stop-state'} aria-hidden="true" />
                </div>
              ))}
            </div>
            <div className="route-footer">
              <span>{t.route.next}</span>
              <strong>{t.route.free}</strong>
            </div>
          </div>
          <p className="stage-note">{t.route.note}</p>
        </div>
      </section>

      <section className="signals section-shell" aria-labelledby="signals-title">
        <div className="section-heading split-heading">
          <div>
            <p className="section-kicker">{t.signals.kicker}</p>
            <h2 id="signals-title">{t.signals.title}</h2>
          </div>
          <p>{t.signals.body}</p>
        </div>
        <div className="signal-grid">
          {t.signals.items.map((item, index) => (
            <article className="signal-card" key={item[0]}>
              <span className="signal-coordinate">{String(index + 1).padStart(2, '0')} / 04</span>
              <div className="signal-icon" aria-hidden="true"><span /></div>
              <h3>{item[0]}</h3>
              <p>{item[1]}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="services-section" id="usluge" aria-labelledby="services-title">
        <div className="section-shell">
          <div className="section-heading services-heading">
            <p className="section-kicker light">{t.services.kicker}</p>
            <div>
              <h2 id="services-title">{t.services.title}</h2>
              <p>{t.services.body}</p>
            </div>
          </div>
          <div className="service-grid">
            {t.services.cards.map((card, index) => (
              <article className={'featured' in card && card.featured ? 'service-card featured' : 'service-card'} key={card.name}>
                <div className="service-topline">
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  {'featured' in card && card.featured && <span className="recommended">{t.services.badge}</span>}
                </div>
                <h3>{card.name}</h3>
                <div className="service-price">
                  <strong>{card.price}</strong>
                  <span>{card.meta}</span>
                </div>
                <p>{card.desc}</p>
                <ul>
                  {card.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                </ul>
                <a href="#booking" aria-label={`${t.services.cta}: ${card.name}`}>
                  {t.services.cta} <span aria-hidden="true">↗</span>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="process-section section-shell" id="proces" aria-labelledby="process-title">
        <div className="section-heading process-heading">
          <p className="section-kicker">{t.process.kicker}</p>
          <h2 id="process-title">{t.process.title}</h2>
        </div>
        <div className="process-route">
          <div className="process-line" aria-hidden="true" />
          {t.process.steps.map((step, index) => (
            <article className="process-step" key={step[0]}>
              <div className="process-node" aria-hidden="true"><span>{index + 1}</span></div>
              <p className="process-phase">{t.process.phase} {String(index + 1).padStart(2, '0')}</p>
              <h3>{step[0]}</h3>
              <p>{step[1]}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="principles-section" aria-labelledby="principles-title">
        <div className="principles-map" aria-hidden="true">
          <span className="principle-orbit orbit-a" />
          <span className="principle-orbit orbit-b" />
          <span className="principle-core">V</span>
        </div>
        <div className="principles-copy">
          <p className="section-kicker light">{t.principles.kicker}</p>
          <h2 id="principles-title">{t.principles.title}</h2>
          <p className="principles-lede">{t.principles.body}</p>
          <div className="principle-labels">
            {t.principles.labels.map((label) => (
              <div key={label[0]}><span>{label[0]}</span><strong>{label[1]}</strong></div>
            ))}
          </div>
          <div className="ethics-note">
            <span className="ethics-mark" aria-hidden="true">↳</span>
            <div>
              <h3>{t.principles.ethicsTitle}</h3>
              <p>{t.principles.ethicsBody}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="pricing-section section-shell" id="cijene" aria-labelledby="pricing-title">
        <div className="pricing-intro">
          <p className="section-kicker">{t.pricing.kicker}</p>
          <h2 id="pricing-title">{t.pricing.title}</h2>
          <p>{t.pricing.body}</p>
          <a className="button button-dark" href="#booking">{t.nav.book} <span aria-hidden="true">↗</span></a>
        </div>
        <div className="price-ledger">
          {t.pricing.table.map((row) => (
            <div className="ledger-row" key={row[0]}>
              <span>{row[0]}</span>
              <small>{row[1]}</small>
              <strong>{row[2]}</strong>
            </div>
          ))}
          <p className="ledger-note">{t.pricing.note}</p>
        </div>
      </section>

      <section className="faq-section section-shell" id="pitanja" aria-labelledby="faq-title">
        <div className="faq-heading">
          <p className="section-kicker">{t.faq.kicker}</p>
          <h2 id="faq-title">{t.faq.title}</h2>
        </div>
        <div className="faq-list">
          {t.faq.items.map((item, index) => (
            <details key={item[0]}>
              <summary><span>{String(index + 1).padStart(2, '0')}</span>{item[0]}<i aria-hidden="true">+</i></summary>
              <p>{item[1]}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="booking-section" id="booking" aria-labelledby="booking-title">
        <div className="booking-copy">
          <p className="section-kicker light">{t.booking.kicker}</p>
          <h2 id="booking-title">{t.booking.title}</h2>
          <p>{t.booking.body}</p>
          <div className="booking-meta">
            <span>{t.booking.timezone}</span>
            <span>Cal.com</span>
          </div>
        </div>
        <div className="booking-card">
          <div className="booking-card-head">
            <div className="booking-avatar" aria-hidden="true">V</div>
            <div>
              <small>Virela Admissions</small>
              <h3>{t.booking.event}</h3>
            </div>
          </div>
          <div className="booking-details">
            <span><i aria-hidden="true">◷</i>{t.booking.duration}</span>
            <span><i aria-hidden="true">◎</i>{t.booking.location}</span>
            <span><i aria-hidden="true">◫</i>{t.booking.timezone}</span>
          </div>
          {calendarLink ? (
            <a className="button button-primary booking-button" href={calendarLink} target="_blank" rel="noopener noreferrer">
              {t.booking.button} <span aria-hidden="true">↗</span>
              <span className="sr-only"> {newTabLabels[locale]}</span>
            </a>
          ) : (
            <a className="button button-primary booking-button" href={`mailto:${contactEmail}`}>
              {t.booking.button} <span aria-hidden="true">↗</span>
            </a>
          )}
          <p className="booking-paid">{t.booking.paid}</p>
        </div>
      </section>
      </main>

      <footer className="site-footer">
        <a className="footer-brand" href="#top">
          <span className="brand-mark inverted" aria-hidden="true">V</span>
          <span><strong>Virela</strong><small>Admissions</small></span>
        </a>
        <p className="footer-line">{t.footer.line}</p>
        <p className="footer-description">{t.footer.description}</p>
        <p className="footer-contact">
          <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
        </p>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} {t.footer.legalEntity}. {t.footer.rights}</span>
          <div>
            <a href="/impressum">{t.footer.legalLabel}</a>
            <a href="/privacy">{t.footer.privacyLabel}</a>
            <a href="#booking">{t.nav.book}</a>
          </div>
        </div>
      </footer>
    </>
  );
}
