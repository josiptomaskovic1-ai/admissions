import type { Locale } from '../content';
import { utility } from '../i18n';
import { intakeFormLinks } from '../site-config';

export function IntakeGate({ locale }: { locale: Locale }) {
  const u = utility[locale];
  const intakeFormLink = intakeFormLinks[locale];

  return (
    <div className="intake-gate">
      <p className="intake-required">{u.intakeRequired}</p>
      <ol className="intake-steps" aria-label={u.intakeRequired}>
        {u.intakeSteps.map((step, index) => (
          <li key={step}>
            <span aria-hidden="true">{index + 1}</span>
            <strong>{step}</strong>
          </li>
        ))}
      </ol>
      {intakeFormLink ? (
        <a className="button button-primary intake-primary" href={intakeFormLink} target="_blank" rel="noopener noreferrer">
          {u.intakeButton}<span className="sr-only"> — {u.external}</span>
        </a>
      ) : (
        <span className="button intake-primary disabled" aria-disabled="true">{u.unavailable}</span>
      )}
      <p className="intake-after">{u.intakeAfter}</p>
      <p className="intake-note">{u.intakeNote}</p>
    </div>
  );
}
