# Virela Admissions — redesign and launch-readiness audit

Audit date: 2026-09-26  
Status: technically release-ready as a private, non-indexed preview; not yet legally ready for public commercial launch.

## Executive result

The homepage was rebuilt from a long client-rendered single page into a compact server-rendered site with six stable language routes and three meaningful subpage types per locale. The design now uses four homepage bands, exposes prices and ethics clearly, has a real contact page, and provides factual privacy/service information without inventing operator details.

Measured page length:

- Before: 11,039 px at a 648 × 790 browser viewport.
- After: 5,138 px at a comparable 663 × 790 viewport (53% shorter).
- After: 3,710 px at a 1,280 × 720 laptop viewport.
- After: 7,019 px at 390 × 844, with no horizontal overflow and the primary CTA inside the first viewport.

There is no meaningful universal “average website length.” The practical target is the shortest page that resolves the visitor’s decision. Virela now uses four homepage bands; further content is split only where it represents a distinct task (contact, privacy, service information). About/team, results and individual service pages should wait until there is verified, non-anonymous source material substantial enough to avoid thin pages.

## International competitor benchmark

| Consultancy | Official site | Pattern studied | Virela decision |
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
- Added an honest inactive booking state when no Cal.com URL is configured.
- Added a short anonymous team note near booking/contact. It describes combined international academic, research, economics and digital experience without names, profile links, credentials or uniquely identifying biographies.

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

- Performance: 87/100
- Accessibility: 100/100
- Best practices: 100/100
- SEO: 66/100 because indexing is intentionally disabled
- First Contentful Paint: 2.4 s
- Largest Contentful Paint: 3.6 s
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

## Privacy, cookies and calendar audit

Current implementation:

- no analytics or advertising scripts;
- no cookies set by the page;
- no local/session storage;
- no first-party contact form;
- no iframe or embedded calendar;
- Cal.com, when configured, opens as a clearly external link;
- minors guidance requires a parent/guardian to book with their own details and attend.

Calendar decision and current cost check:

- Start with the Cal.com individual plan at no monthly cost for one host and one short introductory event.
- The current live pricing page presents the individual tier as free forever with one user, unlimited event types and calendars, notifications and integrations.
- Upgrade only when the team genuinely needs shared availability, round-robin assignment or Cal.com branding removal; the live pricing page lists Teams at USD 12 per user/month when billed annually.
- Cal.com’s own help/blog material has not always described free-tier limits consistently, so the live account and pricing page must be verified when the event is created.
- Use an external link rather than an embedded scheduler, and require a parent/guardian to make and attend bookings for applicants under 18 because Cal.com’s terms require users to be at least 18.

Pricing source checked on 2026-09-26: https://cal.com/pricing

On this implementation, a cookie consent banner would be misleading because there are no non-essential cookies or equivalent browser storage to consent to. Re-audit before adding analytics, retargeting, chat, video, an embedded scheduler or other third-party code.

Primary legal references reviewed:

- GDPR: https://eur-lex.europa.eu/eli/reg/2016/679/oj
- EDPB guidance on the technical scope of ePrivacy storage/access rules: https://www.edpb.europa.eu/documents/guideline/guidelines-22023-on-technical-scope-of-art-53-of-eprivacy-directive_en
- German TDDDG §25: https://www.gesetze-im-internet.de/ttdsg/__25.html
- Croatian supervisory authority cookie guidance: https://azop.hr/obrada-osobnih-podataka-kolacici/
- German DDG §5 provider-information duty: https://www.gesetze-im-internet.de/ddg/__5.html
- EU Consumer Rights Directive: https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32011L0083
- Cal.com terms, privacy and trust/DPA information: https://cal.com/terms, https://cal.com/privacy, https://trust.cal.com/

This audit is product/legal-readiness information, not a substitute for advice from qualified counsel in the operator’s jurisdictions.

## Public-launch blockers

Do not enable public indexing or paid online contracting until the owner supplies and verifies:

1. legal/operator name and legal form;
2. business/geographic address;
3. public contact email;
4. registry and VAT/tax identifiers where applicable;
5. final terms, cancellation policy, governing-law/consumer information and statutory withdrawal notice;
6. active Cal.com event URL and completed data-processing/DPA review;
7. verified founder/team proof if a public About/Team section is desired.

Until then, keep `NEXT_PUBLIC_PUBLIC_LAUNCH=false` and `NEXT_PUBLIC_LEGAL_READY=false`, keep booking inactive unless its external workflow is approved, and preserve private deployment access. Indexing is enabled only when both gates are true and valid public calendar/contact values are also present.
