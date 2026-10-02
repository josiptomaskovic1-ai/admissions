# Adria Admissions — legal launch checklist

This is an internal release checklist, not legal advice. Public search indexing is enabled for the informational site. Keep payment collection and online contract formation disabled until every blocking item below has been completed with verified information.

## Blocking before paid launch

- Add the registered business name, legal form, registration number, tax/VAT number where applicable, registered address and official contact details.
- Identify the data controller and provide a complete privacy notice with lawful bases, retention periods, data-subject rights and the competent supervisory authority.
- Publish service terms covering the exact scope, payment timing, cancellations, refunds, withdrawal rights, complaint handling and jurisdiction.
- Define and document a safeguarding and consent process before collecting or handling personal data about applicants under 18.
- Confirm the contractual and data-processing arrangements for Calendly, hosting, Cloudflare and any future email or CRM provider.
- Verify that the public offer, prices, instalments and cancellation terms match the signed client agreement.

## Technical payment gate

- Keep `NEXT_PUBLIC_LEGAL_READY` unset or `false` until the blocking legal items are approved. `NEXT_PUBLIC_PUBLIC_LAUNCH=false` remains available as an emergency search-indexing kill switch.
- Re-run the full localized site audit, accessibility checks, dependency audit and production build before enabling payment collection.
- Recheck cookies and third-party scripts after every provider or analytics change. A consent banner is not required while only essential security cookies are used; reassess before adding analytics or advertising.
- Test the Calendly flow and every published contact address from a device that is not signed in to an administrator account.

## Quarterly maintenance

- Confirm prices, package scope, scholarship references, service wording and external links.
- Review dependency and CodeQL alerts, Cloudflare security status, DNSSEC, domain renewal and certificate status.
- Re-run the localized language audit, mobile visual audit and privacy-cookie check.
- Record the review date and any action taken in the repository or maintenance log.
