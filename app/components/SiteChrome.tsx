import type { Locale } from '../content';
import { localeMeta, locales, utility } from '../i18n';
import { translations } from '../content';
import { brandName } from '../site-config';

type PageKind = 'home' | 'contact' | 'privacy' | 'service-information';

function Brand({ locale, footer = false }: { locale: Locale; footer?: boolean }) {
  return (
    <a className={footer ? 'brand footer-brand' : 'brand'} href={`/${locale}`} aria-label={brandName}>
      <span className="brand-mark" aria-hidden="true">
        <svg viewBox="0 0 64 64" focusable="false">
          <path d="M9 52.5h8.5L32.1 9l3.2 6.2-15 37.3H9Z" />
          <path d="M32.1 9 55 52.5H43.8L27.6 20.8 32.1 9Z" />
          <path className="brand-mark-arc" d="M19.7 40.8c7.2-16 20.6-14.9 31.1 5.2" />
          <path d="M7.5 52.5h49v2H7.5z" />
        </svg>
      </span>
      <span className="brand-type"><strong>Adria Admissions</strong><small>Study abroad advisory</small></span>
    </a>
  );
}

export function SiteHeader({ locale, page = 'home' }: { locale: Locale; page?: PageKind }) {
  const t = translations[locale];
  const u = utility[locale];
  const suffix = page === 'home' ? '' : `/${page}`;
  const home = `/${locale}`;

  return (
    <>
      <a className="skip-link" href="#main-content">{u.skip}</a>
      <header className="site-header">
        <Brand locale={locale} />
        <nav className="main-nav" aria-label={u.navigation}>
          <a href={`${home}#services`}>{t.nav.services}</a>
          <a href={`${home}#process`}>{t.nav.process}</a>
          <a href={`${home}#pricing`}>{t.nav.pricing}</a>
          <a href={`${home}#faq`}>{t.nav.faq}</a>
          <a href={`${home}/contact`}>{u.contact}</a>
        </nav>
        <div className="header-actions">
          <a className="header-contact" href={`${home}/contact`}>{u.contact}</a>
          <details className="language-menu">
            <summary>
              <span className="sr-only">{u.currentLanguage}: </span>
              <span aria-hidden="true">{localeMeta[locale].short}</span>
              <span className="sr-only">{localeMeta[locale].native}</span>
              <span className="chevron" aria-hidden="true">⌄</span>
            </summary>
            <div className="language-popover" aria-label={u.language}>
              {locales.map((item) => (
                <a href={`/${item}${suffix}`} hrefLang={localeMeta[item].hrefLang} lang={localeMeta[item].html} aria-current={item === locale ? 'page' : undefined} key={item}>
                  <span>{localeMeta[item].short}</span>{localeMeta[item].native}
                </a>
              ))}
            </div>
          </details>
          <a className="button header-cta" href={`${home}#booking`}><span className="header-cta-label">{t.nav.book}</span><span className="header-cta-icon" aria-hidden="true">↗</span></a>
        </div>
      </header>
    </>
  );
}

export function SiteFooter({ locale }: { locale: Locale }) {
  const t = translations[locale];
  const u = utility[locale];

  return (
    <footer className="site-footer">
      <div className="footer-main">
        <Brand locale={locale} footer />
        <p>{t.footer.description}</p>
        <strong>{t.footer.line}</strong>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} {brandName}. {t.footer.rights}</span>
        <nav aria-label={u.navigation}>
          <a href={`/${locale}/contact`}>{u.contact}</a>
          <a href={`/${locale}/privacy`}>{u.privacy}</a>
          <a href={`/${locale}/service-information`}>{u.serviceInfo}</a>
        </nav>
      </div>
    </footer>
  );
}
