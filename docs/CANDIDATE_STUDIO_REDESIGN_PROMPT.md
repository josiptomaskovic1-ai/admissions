# The Candidate Studio — production redesign prompt

Use this prompt to review, redesign, test and ship The Candidate Studio website. Treat the existing repository as the source of truth and preserve user-owned work. Do not invent credentials, testimonials, acceptance rates, partnerships, office addresses, legal identities or outcomes.

## Objective

Create a premium, compact admissions-consultancy website that feels like a precise admissions decision desk: simple and calm, but visually memorable. Premium should come from typography, hierarchy, exact spacing, useful density and one distinctive route visualization—not from oversized empty areas, generic campus imagery or long scrolling.

The site should answer five questions quickly:

1. What does The Candidate Studio do?
2. Is it independent and ethical?
3. What does it cost?
4. Who will I meet and what happens next?
5. How do I book or contact the team?

## Audience and language architecture

Primary audience: Balkan students, parents and diaspora applicants considering European bachelor’s or master’s programs.

Required language options, each with a stable, indexable URL:

- Croatian (`/hr`)
- Bosnian/Bošnjački (`/bs`)
- Serbian/Montenegrin in Latin script (`/sr`)
- English (`/en`)
- German (`/de`)
- French (`/fr`)

Never store the language in cookies or local storage. Language switching must use normal links, preserve the current page type and provide reciprocal `hreflang` links plus `x-default`. Localized pages must include localized titles, descriptions, navigation labels, accessibility labels and legal summaries.

## Information architecture and length

There is no useful universal “average website length.” Optimize for decision completion. For this offer, target four dense homepage bands and roughly 3,200–4,500 rendered pixels on a common desktop viewport; mobile may be longer because cards stack, but every screen must contain meaningful information. Avoid any decorative block that consumes a viewport by itself.

Homepage:

1. Compact split hero: value proposition, one primary CTA, one secondary CTA, starting consultation price, three trust signals, and the three-stop admissions route.
2. One combined strategy/process band: four decision factors plus three steps.
3. One combined services/pricing band: four packages, transparent starting prices, an expandable semantic table for individual tasks/add-ons, and the ethics statement.
4. One combined FAQ/booking band: native disclosure FAQs and one booking card.

Required subpages per locale:

- Contact: booking option, direct-contact state, expected response state and what to prepare.
- Privacy & cookies: factual description of current processing and external calendar behavior.
- Service information: independence, applicant authorship, no outcome guarantees, scope and pre-contract information.

Do not create thin “SEO pages” merely to increase page count. Add About/Team, Results/Stories and individual service pages only when verified biographies, evidence, testimonials and genuinely distinct service content are available.

## Team copy and anonymity

Keep the team anonymous on the public page. Never publish names, personal profile links, portraits or uniquely identifying biographies without a separate explicit decision. Use only a short statement near booking/contact:

> On the introductory call, clients meet one available member of the team. Together, the team brings strong international academic, research, economics and digital experience.

Do not imply that every team member holds every qualification. Do not describe unverified admissions outcomes.

## Visual direction

Creative north star: a compact admissions dossier with a visible route from Profile → Direction → Application.

- Palette: ink navy `#071D2B`, cobalt `#2F57FF`, teal `#61D8C4`, coral `#E65B43`, fog `#F2F7F6`, white, muted blue-grey.
- Display type: Syne, used sparingly for short headings.
- Body/UI type: Manrope.
- Header: about 72 px; no mega-menu.
- Desktop section padding: about 64–72 px; mobile: about 48 px.
- Body text: at least 16 px; operational labels: at least 12 px with sufficient contrast.
- Controls: at least 44×44 px.
- Use one-pixel borders and tonal layers for depth; reserve shadows for the route and booking card.
- Use no generic student/campus stock photos and no ornamental globes or large maps.
- Motion is optional, brief and nonessential; disable it under reduced-motion preferences.

## Benchmark input: ten international consultancies

Study these official sites for patterns, not for copying:

1. Crimson Education — https://www.crimsoneducation.org/us
2. IvyWise — https://www.ivywise.com/
3. InGenius Prep — https://ingeniusprep.com/
4. Solomon Admissions — https://www.solomonadmissions.com/
5. Collegewise — https://collegewise.com/
6. Accepted — https://www.accepted.com/
7. Oxbridge Applications — https://oxbridgeapplications.com/
8. Ivy Coach — https://www.ivycoach.com/
9. The Profs — https://www.theprofs.co.uk/university-admissions/
10. Hale Education — https://www.haleeducation.com/

Apply these synthesized lessons:

- Hale: balanced split hero and calm premium tone.
- The Profs: useful above-the-fold density and an obvious next step.
- Ivy Coach: distinctive typography without decorative overload.
- Collegewise, Accepted and Oxbridge Applications: pricing clarity reduces uncertainty.
- InGenius Prep and Solomon Admissions: explain a method and evidence rather than adding generic page length.
- Keep the first screen to proposition, one explanatory sentence, primary action and one trust/proof cue.
- Limit navigation choices and show a concrete starting price.

## Content and integrity rules

- State that The Candidate Studio is independent and is not a university sales channel.
- State that universities and scholarship bodies make final decisions.
- Do not promise admission or scholarships.
- Do not write essays for applicants; describe structure, questions and feedback.
- Use “starting at” only where scope genuinely varies.
- Clearly distinguish packages from standalone tasks/add-ons so prices do not appear contradictory.
- Current university requirements must be verified on official university sources.
- If booking/email configuration is missing, show an honest inactive state. Never render a button that appears operational but does nothing.

## Calendar, minors and privacy

Keep Cal.com as an external link behind the stable localized `/{locale}/book` route, not an embedded iframe. Use one 20-minute team round-robin event with a 10-minute post-call buffer, 24 hours' minimum notice, a rolling 21-day booking window and least-recently-booked assignment. Before activating it, require a valid event URL, connect all three advisers' calendars, complete the vendor/DPA review and pass real conflict/assignment tests.

Applicants under 18 must be told that a parent or guardian should book using their own name and email and attend the call. The scheduling form must not request a minor's name, date of birth, school, grades, transcripts or other sensitive material.

Do not show a cookie banner when the site uses no non-essential cookies, analytics, advertising, embedded calendar or browser storage. Instead, publish an accurate privacy/cookie page. If analytics, retargeting, embedded scheduling, chat or video is later added, re-audit storage, consent and disclosures before release.

## SEO requirements

- Server-render meaningful content; avoid making the entire page a client component.
- Provide localized title and description metadata.
- Provide canonical URLs and reciprocal language alternatives.
- Provide `robots.txt` and `sitemap.xml`.
- Use `noindex, nofollow` and an empty sitemap until the public-launch legal gate is complete.
- Add conservative `ProfessionalService` structured data without fake address, ratings or founder claims.
- Use exactly one descriptive H1 and logical heading order.
- Make the logo and navigation crawlable links.
- Use a 1200×630 optimized social image and correct Open Graph dimensions.
- Avoid duplicate pages, broken anchors and nonfunctional CTAs.

## Accessibility and responsive requirements

- Include a skip link; place header/footer outside the main content landmark.
- Use native `<details>` for FAQ and price disclosures.
- Use a semantic table for itemized prices.
- Keep visible focus on every interactive element.
- Meet WCAG AA contrast for essential text and controls.
- Support keyboard-only use, 200% zoom, forced colors and reduced motion.
- Make external navigation apparent to screen readers.
- Prevent horizontal overflow at 320, 375, 390, 768, 1024 and 1440 px widths.
- Ensure the primary proposition and CTA are visible within the first common mobile viewport without a large blank area.

## Legal launch gate

Do not claim the site is fully compliant until the real operator supplies and verifies:

- legal/operator name and legal form;
- geographic/business address;
- direct contact email;
- registry and VAT/tax identifiers where applicable;
- governing-law and consumer information;
- cancellation and statutory withdrawal terms for paid distance services;
- completed Cal.com data-processing review/DPA;
- final service contract/terms.

Keep the deployment private and the pages `noindex` until those fields are complete. Never publish visible fake placeholders as legal data.

## Test and audit matrix

Run and record:

1. Lint, strict TypeScript check and production build.
2. Dependency vulnerability audit, distinguishing production from development-only findings.
3. Route test for `/`, all six locale homepages, all localized contact/privacy/service-information pages, `robots.txt` and `sitemap.xml`.
4. Link and anchor scan for broken internal destinations.
5. Metadata scan for one H1, canonical URL, reciprocal `hreflang`, Open Graph, robots and structured data.
6. Responsive visual review at mobile, tablet, laptop and wide desktop; record scroll height and horizontal overflow.
7. Keyboard test: skip link, language selector, FAQ, price disclosure and CTA sequence.
8. Automated accessibility scan (axe or equivalent) and manual contrast/zoom/reduced-motion checks.
9. Lighthouse or equivalent performance/SEO/accessibility/best-practice audit against the production build.
10. Privacy storage/network review confirming no first-party form, analytics, marketing cookie, local storage or hidden third-party embed.
11. Security-header review and a passive security scan. Do not perform intrusive testing against systems without authorization.
12. Booking test for both configured and unconfigured states.

Fix release-blocking findings, rerun affected tests, and document residual risks honestly.

## Delivery and publishing

- Update `DESIGN.md` whenever design tokens or brand rules change.
- Commit only source and documentation; exclude credentials, environment files, build output and hosting metadata.
- Create a descriptive Git commit.
- Push the exact tested revision to the supplied GitHub repository.
- Publish the same tested revision to the existing private Sites project without changing its access mode.
- Verify the deployment reaches a successful state and opens the deployed URL.
- Report the commit, deployment URL, before/after page-length metrics, test outcomes and the exact inputs still needed for public launch.
