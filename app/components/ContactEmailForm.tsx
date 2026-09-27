'use client';

import { useEffect, useRef, useState } from 'react';
import type { FormEvent } from 'react';
import type { Locale } from '../content';
import { utility } from '../i18n';

type FieldName = 'name' | 'email' | 'message';
type FieldErrors = Partial<Record<FieldName, string>>;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ContactEmailForm({ locale, email }: { locale: Locale; email: string }) {
  const copy = utility[locale].contactForm;
  const [errors, setErrors] = useState<FieldErrors>({});
  const [busy, setBusy] = useState(false);
  const [status, setStatus] = useState('');
  const formRef = useRef<HTMLFormElement>(null);
  const releaseTimer = useRef<number | undefined>(undefined);

  useEffect(() => () => {
    if (releaseTimer.current) window.clearTimeout(releaseTimer.current);
  }, []);

  function clearError(field: FieldName) {
    if (!errors[field]) return;
    setErrors((current) => ({ ...current, [field]: undefined }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (busy) return;

    const data = new FormData(event.currentTarget);
    const values = {
      name: String(data.get('name') ?? '').trim(),
      email: String(data.get('email') ?? '').trim(),
      message: String(data.get('message') ?? '').trim(),
    };
    const nextErrors: FieldErrors = {};

    if (values.name.length < 2) nextErrors.name = copy.nameError;
    if (!emailPattern.test(values.email)) nextErrors.email = copy.emailError;
    if (values.message.length < 20) nextErrors.message = copy.messageError;

    setErrors(nextErrors);
    setStatus('');

    const firstError = (['name', 'email', 'message'] as FieldName[]).find((field) => nextErrors[field]);
    if (firstError) {
      const control = formRef.current?.elements.namedItem(firstError);
      if (control instanceof HTMLElement) control.focus();
      return;
    }

    const subject = `${copy.subject} — ${values.name}`;
    const body = [
      `${copy.nameLabel}: ${values.name}`,
      `${copy.emailLabel}: ${values.email}`,
      '',
      `${copy.messageLabel}:`,
      values.message,
    ].join('\n');

    setBusy(true);
    setStatus(copy.prepared);
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    releaseTimer.current = window.setTimeout(() => setBusy(false), 1200);
  }

  return (
    <section className="contact-card contact-form-card" aria-labelledby="contact-form-title">
      <p className="section-kicker">{utility[locale].contactDirect}</p>
      <h2 id="contact-form-title">{copy.title}</h2>
      <p className="contact-form-lead">{copy.lead}</p>
      <form ref={formRef} className="contact-form" onSubmit={handleSubmit} noValidate>
        <div className="contact-form-fields">
          <div className="form-field">
            <label htmlFor={`contact-name-${locale}`}>{copy.nameLabel}</label>
            <input
              id={`contact-name-${locale}`}
              name="name"
              type="text"
              autoComplete="name"
              maxLength={120}
              required
              aria-invalid={errors.name ? 'true' : undefined}
              aria-describedby={errors.name ? `contact-name-error-${locale}` : undefined}
              placeholder={copy.namePlaceholder}
              onChange={() => clearError('name')}
            />
            {errors.name ? <p className="field-error" id={`contact-name-error-${locale}`} role="alert">{errors.name}</p> : null}
          </div>
          <div className="form-field">
            <label htmlFor={`contact-email-${locale}`}>{copy.emailLabel}</label>
            <input
              id={`contact-email-${locale}`}
              name="email"
              type="email"
              inputMode="email"
              autoComplete="email"
              maxLength={254}
              required
              aria-invalid={errors.email ? 'true' : undefined}
              aria-describedby={errors.email ? `contact-email-error-${locale}` : undefined}
              placeholder={copy.emailPlaceholder}
              onChange={() => clearError('email')}
            />
            {errors.email ? <p className="field-error" id={`contact-email-error-${locale}`} role="alert">{errors.email}</p> : null}
          </div>
          <div className="form-field form-field-message">
            <label htmlFor={`contact-message-${locale}`}>{copy.messageLabel}</label>
            <textarea
              id={`contact-message-${locale}`}
              className="resize-none"
              name="message"
              rows={5}
              maxLength={2500}
              required
              aria-invalid={errors.message ? 'true' : undefined}
              aria-describedby={errors.message ? `contact-message-error-${locale}` : undefined}
              placeholder={copy.messagePlaceholder}
              onChange={() => clearError('message')}
            />
            {errors.message ? <p className="field-error" id={`contact-message-error-${locale}`} role="alert">{errors.message}</p> : null}
          </div>
        </div>
        <div className="contact-form-actions">
          <p>{copy.privacyNote} <a href={`/${locale}/privacy`}>{utility[locale].privacy}</a></p>
          <button className="button button-primary" type="submit" disabled={busy} aria-busy={busy}>
            {copy.submit}<span aria-hidden="true">↗</span>
          </button>
        </div>
        <p className="form-status" aria-live="polite">{status}</p>
      </form>
    </section>
  );
}
