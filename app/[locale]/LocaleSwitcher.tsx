'use client';

import { Locale, translations } from '../content';

const languageLabels: Record<Locale, string> = {
  bs: 'BS',
  sr: 'SR',
  hr: 'HR',
  en: 'EN',
  de: 'DE',
};

export default function LocaleSwitcher({ locale, label }: { locale: Locale; label: string }) {
  const onChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const next = event.target.value;
    // Persist so the root redirect (middleware) honors the choice on return visits.
    document.cookie = `virela-locale=${next};path=/;max-age=31536000;samesite=lax`;
    window.location.href = `/${next}`;
  };

  return (
    <label className="language-control">
      <span className="sr-only">{label}</span>
      <select value={locale} onChange={onChange}>
        {(Object.keys(translations) as Locale[]).map((key) => (
          <option value={key} key={key}>{languageLabels[key]}</option>
        ))}
      </select>
    </label>
  );
}
