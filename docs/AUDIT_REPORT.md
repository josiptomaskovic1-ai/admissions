# Adria Admissions — redesign and launch-readiness audit

Audit date: 2026-09-26  
Status: technically release-ready as a private, non-indexed preview; not yet legally ready for public commercial launch.

## Executive result

The homepage was rebuilt from a long client-rendered single page into a compact server-rendered site with six stable language routes and three meaningful subpage types per locale. The design now uses four homepage bands, exposes prices and ethics clearly, has a real contact page, and provides factual privacy/service information without inventing operator details.

Measured page length:

- Before: 11,039 px at a 648 × 790 browser viewport.
- After: 5,138 px at a comparable 663 × 790 viewport (53% shorter).
- After: 3,845 px at a 1,280 × 720 laptop viewport.
- After: 6,502 px at 390 × 844, with no horizontal overflow and the primary CTA inside the first viewport.

There is no meaningful universal “average website length.” The practical target is the shortest page that resolves the visitor’s decision. Adria Admissions now uses four homepage bands; further content is split only where it represents a distinct task (contact, privacy, service information). About/team, results and individual service pages should wait until there is verified, non-anonymous source material substantial enough to avoid thin pages.

## International competitor benchmark

| Consultancy | Official site | Pattern studied | Adria Admissions decision |
|---|---|---|---|
| Crimson Education | https://www.crimsoneducation.org/us | Strong proposition and high conversion focus | Keep one dominant CTA, but avoid inflated proof density |
| IvyWise | https://www.ivywise.com/ | Established editorial authority | Use calm authority without creating a long article-like homepage |
| InGenius Prep | https://ingeniusprep.com/ | Method and evidence | Explain the decision process rather than adding generic copy |
| Solomon Admissions | https://www.solomonadmissions.com/ | Outcome-oriented structure | Keep process clarity, never copy unverified outcome claims |
| Collegewise | https://collegewise.com/ | Friendly clarity and transparent choices | Use public starting prices and plain-language scope |
| Accepted | https://www.accepted.com/ | Clear service segmentation | Separate packages from standalone tasks/add-ons |
| Oxbridge Applications | https://oxbridgeapplications.com/ | Direct service and price communication | Show pricing early without turning the page into a price list |
| Ivy Coach | https://www.ivycoach.com/ | Distinctive typography | Use Syne as a restrained brand signal |
| The Profs | https://www.theprofs.co.uk/university-admissions/ | Useful above-the-fold density | Keep proposition, CTA and proof cue inside the first viewport |
| Hale Education | https://www.haleeducation.com/ | Balanced premium split hero | Use a split hero with a compact route panel |

The redesign synthesizes these patterns; it does not reproduce any competitor’s layout, copy or identity.

## Information architecture and languages

Implemented language routes:

- `/hr` — Hrvatski
- `/bs` — Bosanski / bošnjački
- `/sr` — Srpski / crnogorski, latinica
- `/en` — English
- `/de` — Deutsch
- `/fr` — Français

Implemented localized page types:

- homepage;
- contact;
- privacy and cookies;
- service information.

The root route redirects to `/bs`. Language switching uses links, not browser storage. Every localized page includes a canonical URL and reciprocal language alternatives, including `x-default`.

## Visual and UX audit

Resolved:

- Removed viewport-sized decorative sections and very large blank areas.
- Reduced the homepage to four purposeful content bands.
- Combined process with decision factors; combined services with pricing; combined FAQ with booking.
- Kept one memorable visual device: Profile → Direction → Application.
- Made the first laptop viewport include proposition, explanation, CTA, starting price and route panel.
- Added a compact sticky header, visible focus states, 44 px or larger controls and responsive grids.
- Replaced the map/globe social image with a route-led 1200 × 630 asset.
- Reduced the social image from 1.49 MB to 24 KB.
- Added a stable localized booking route that opens the configured Calendly profile externally.
- Added a short anonymous team note near booking/contact. It explains that the introductory caller meets one available team member and describes the team's combined international academic, research, economics and digital experience without names, profile links, credentials or uniquely identifying biographies.

Deliberately not added:

- generic student/campus stock imagery;
- fabricated testimonials, acceptance rates or university logos;
- personal team names/profile links;
- a mobile hamburger menu for four homepage anchors (the primary task and language remain directly available).

## SEO audit

Implemented:

- server-rendered content; no page-level client component;
- localized titles and descriptions;
- canonical URLs and reciprocal `hreflang` alternatives;
- Open Graph/Twitter metadata and optimized 1200 × 630 image;
- conservative `ProfessionalService` structured data;
- one H1 per page and logical landmarks/headings;
- `robots.txt` and `sitemap.xml`;
- blocking metadata in the document head for consistent crawler/tool compatibility;
- 24 localized page/metadata/anchor checks in the repeatable site audit script.

The current preview intentionally returns `noindex, nofollow`, blocks crawlers in `robots.txt`, and returns an empty sitemap until the legal/public-launch gate is enabled. Lighthouse therefore reports SEO 66 rather than a public-site score; the penalty is the intentional crawl block, not missing localized metadata.

## Accessibility audit

Results:

- Lighthouse accessibility: 100/100.
- axe WCAG 2.0/2.1 A/AA: 0 violations; 23 automated passes. Color contrast and one ARIA condition required manual review because axe marked them incomplete, not failed.
- Skip link successfully moves focus to the main landmark.
- Language selector exposes six keyboard-accessible links.
- Pricing and FAQ use native details/summary controls.
- Itemized prices use a semantic table.
- Reduced-motion and forced-colors styles are present.
- 390 px viewport has no horizontal overflow.
- Primary mobile CTA is visible within the first 844 px.

## Performance and quality audit

Production-build Lighthouse (simulated mobile):

- Performance: 90/100
- Accessibility: 100/100
- Best practices: 100/100
- SEO: 66/100 because indexing is intentionally disabled
- First Contentful Paint: 2.1 s
- Largest Contentful Paint: 3.4 s
- Total Blocking Time: 0 ms
- Cumulative Layout Shift: 0

The local Vinext production server does not compress static text assets, so Lighthouse identifies a potential compression saving. The hosting/CDN layer should be rechecked after deployment. The remaining unused JavaScript is primarily the framework runtime; the site itself adds no client state or third-party script.

Automated engineering results:

- ESLint: pass
- Strict TypeScript: pass
- Production build: pass
- Route/metadata/anchor audit: pass across 24 localized pages
- npm dependency audit: 0 known vulnerabilities across production and development dependencies
- DESIGN.md linter: 0 errors, 0 warnings
- Security headers verified in production build: `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`, `Permissions-Policy`, `Cross-Origin-Opener-Policy`; `X-Powered-By` removed

## Introductory call and pricing audit

The client-facing introductory call is set to 15 minutes, followed by an internal 15-minute buffer. This matches the concise fit-call model used by Ivy Coach while preserving a simple 30-minute operating block for the adviser. The call covers study level, target countries, timing, immediate needs and mutual fit; it does not include a detailed profile evaluation, shortlist or document review.

Call-duration sources checked on 2026-09-26:

- Ivy Coach, free 15-minute consultation: https://www.ivycoach.com/admissions-counseling/college-admissions-counseling/
- InGenius Prep, free 30-minute consultation: https://ingeniusprep.com/free-consultation/
- Collegewise, free 30-minute consultation: https://collegewise.com/online
- Accepted, free 30-minute consultation: https://www.accepted.com/about/team/

The launch pricing is internally aligned as follows:

| Service | Launch price | Scope signal |
|---|---:|---|
| Introductory fit call | 0 € | 15 minutes; fit and routing only |
| Expert/strategy consultation | 100 € | 60 minutes |
| Admissions Blueprint | 240 € | fixed price; profile inputs, session and written plan |
| University Direction | from 490 € | up to eight programs, deadline/cost map and one revision |
| Full Application Partnership | 1,400–2,500 € | tightly scoped European application cycle |

The 100 € consultation and 240 € blueprint are deliberately accessible regional launch prices. The full-support range is materially below the international premium consultancies reviewed, so it requires explicit limits: up to four European programs, two review rounds per agreed document and a defined support period. US/UK-heavy work, additional applications and substantial scholarship work should be quoted separately.

Pricing comparators checked on 2026-09-26:

- Collegewise lists comprehensive packages at USD 8,000–15,000 and higher-touch tiers above that range: https://collegewise.com/
- Accepted lists a two-hour college package at USD 840 by card and additional hours at USD 420: https://shop.accepted.com/products/college-application-hourly-services
- Oxbridge Applications lists a 75-minute consultation with report at GBP 395 and publishes separate service fees: https://oxbridgeapplications.com/about-us/fees/
- The Profs lists admissions tuition from GBP 150 per hour plus a placement fee and minimum engagement: https://www.theprofs.co.uk/university-admissions/

These comparisons support the launch positioning; they are not claims that the services are identical. Final scope and price must be confirmed in writing before payment. The expanded price table must distinguish its first four core rows from the remaining standalone tasks and add-ons so lower task prices are not mistaken for package prices.

## Privacy, cookies and calendar audit

Current implementation:

- no analytics or advertising scripts;
- no cookies set by the page;
- no local/session storage;
- no first-party contact form;
- no iframe or embedded calendar;
- Calendly opens as a clearly external link behind the stable localized `/{locale}/book` route;
- minors guidance requires a parent/legal guardian to book with their own adult details and attend;
- the scheduler intake excludes a minor's name, date of birth, school, grades and documents.

Calendar decision and current cost check:

- Use one Adria Admissions Calendly profile. When all advisers are added, configure one public 15-minute team round-robin event, a 15-minute post-call buffer, 24-hour minimum notice, a rolling 21-day booking window and a limit of four introductory calls per adviser per day.
- Each adviser connects every Google, Outlook or Apple/iCloud calendar that can make them unavailable and controls their own availability. The public site exposes only the single team event, not individual calendar links.
- Send confirmation immediately and reminders 24 hours and 2 hours before the call.
- Keep a separate unlisted 45-minute collective event only for cases that genuinely need two advisers; it is not the public default.
- Use an external link rather than an embedded scheduler. Require a parent/legal guardian to make and attend bookings for applicants under 18 and keep minor data out of scheduling notes.
- Complete the vendor/DPA review and document retention before activation; six months is a practical starting retention period for unqualified leads unless another lawful need applies.

Calendar sources checked on 2026-09-26:

- Pricing: https://cal.com/pricing
- Teams: https://cal.com/teams
- Round robin: https://cal.com/blog/round-robin-scheduling-guide
- Google Calendar: https://cal.com/docs/atoms/google-calendar-connect
- Outlook Calendar: https://cal.com/docs/atoms/outlook-calendar-connect
- Apple Calendar: https://cal.com/docs/atoms/apple-calendar-connect
- Terms, privacy and trust/DPA information: https://cal.com/terms, https://cal.com/privacy, https://trust.cal.com/

The full operator setup and acceptance test are documented in `docs/TEAM_CALENDAR_SETUP.md`. The code can provide the stable redirect and an honest inactive state, but round-robin booking is not live until the Teams workspace exists, all three members have connected their calendars, the event URL is configured and test bookings prove conflict avoidance and assignment.

On this implementation, a cookie consent banner would be misleading because there are no non-essential cookies or equivalent browser storage to consent to. Re-audit before adding analytics, retargeting, chat, video, an embedded scheduler or other third-party code.

Primary legal references reviewed:

- GDPR: https://eur-lex.europa.eu/eli/reg/2016/679/oj
- EDPB guidance on the technical scope of ePrivacy storage/access rules: https://www.edpb.europa.eu/documents/guideline/guidelines-22023-on-technical-scope-of-art-53-of-eprivacy-directive_en
- German TDDDG §25: https://www.gesetze-im-internet.de/ttdsg/__25.html
- Croatian supervisory authority cookie guidance: https://azop.hr/obrada-osobnih-podataka-kolacici/
- German DDG §5 provider-information duty: https://www.gesetze-im-internet.de/ddg/__5.html
- EU Consumer Rights Directive: https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32011L0083
- Calendly privacy and legal information: https://calendly.com/legal/privacy-notice, https://calendly.com/legal

This audit is product/legal-readiness information, not a substitute for advice from qualified counsel in the operator’s jurisdictions.

## Public-launch blockers

Do not enable public indexing or paid online contracting until the owner supplies and verifies:

1. legal/operator name and legal form;
2. business/geographic address;
3. public contact email;
4. registry and VAT/tax identifiers where applicable;
5. final terms, cancellation policy, governing-law/consumer information and statutory withdrawal notice;
6. active 15-minute Calendly event with only the Adria Admissions public identity, all required calendar connections tested, and completed data-processing/DPA review;
7. verified founder/team proof if a public About/Team section is desired.

Until then, keep `NEXT_PUBLIC_PUBLIC_LAUNCH=false` and `NEXT_PUBLIC_LEGAL_READY=false`, keep booking inactive unless its external workflow is approved, and preserve private deployment access. Indexing is enabled only when both gates are true and valid public calendar/contact values are also present.
