---
version: alpha
name: "The Candidate Studio"
description: "A compact, decision-led admissions consultancy site for Balkan students, families, and diaspora applicants targeting European universities."
colors:
  primary: "#2F57FF"
  ink: "#071D2B"
  cobalt: "#2F57FF"
  teal: "#61D8C4"
  coral: "#E65B43"
  fog: "#F2F7F6"
  white: "#FFFFFF"
  muted: "#49616B"
  border: "#C8D5D4"
typography:
  display:
    fontFamily: "Syne, Arial, sans-serif"
  body:
    fontFamily: "Manrope, Arial, sans-serif"
rounded:
  DEFAULT: "0.5rem"
  sm: "0.25rem"
  md: "0.5rem"
  lg: "1rem"
  pill: "999px"
spacing:
  section-mobile: "3rem"
  section-desktop: "4.5rem"
  page-gutter: "1.5rem"
  content-max: "78rem"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.white}"
    rounded: "{rounded.md}"
    height: "2.875rem"
  route-panel:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.teal}"
    rounded: "{rounded.lg}"
  heading-accent:
    backgroundColor: "{colors.white}"
    textColor: "{colors.cobalt}"
  focus-accent:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.coral}"
  soft-surface:
    backgroundColor: "{colors.fog}"
    textColor: "{colors.ink}"
  muted-copy:
    backgroundColor: "{colors.white}"
    textColor: "{colors.muted}"
  divider:
    backgroundColor: "{colors.border}"
    textColor: "{colors.ink}"
  header:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    height: "4.5rem"
---

# The Candidate Studio Design System

## Overview

### Creative North Star

The site should feel like a precise admissions decision desk: a calm, compact dossier that turns a complicated process into one visible route. The page is not a lifestyle magazine and not a university brochure. Its visual signature is a concise three-stop route panel that makes profile, direction, and application feel connected.

### Product context and register

- **Audience and primary job:** Balkan and diaspora students, parents, and early-career applicants who need to understand The Candidate Studio's fit, scope, pricing, and next step quickly.
- **Target markets:** Bosnia and Herzegovina, Serbia, Montenegro, Croatia, the wider Balkan diaspora, and English-, German-, and French-speaking European visitors.
- **Locales:** Croatian, Bosnian/Bošnjački, Serbian/Montenegrin Latin, English, German, and French. Each language has a stable URL; Bosnian is the default. No browser storage is used for language selection.
- **Usage scene:** Mostly mobile and small-laptop comparison shopping under deadline pressure. Users should see the proposition, starting price, ethics, and booking route without prolonged scrolling.
- **Register:** Brand-led marketing with product-level clarity and accessibility.
- **Memorable signature:** The admissions route panel and connected route line.
- **Restraint:** All other sections use quiet grids, concise copy, honest starting prices, and limited motion.
- **Anti-references:** Full-screen empty heroes, generic campus stock-photo collages, unverified acceptance claims, ornamental globes/maps, mega-menus, and repeated conversion banners.
- **Token ownership/runtime mapping:** Model B. `app/globals.css` is the canonical runtime token source. This file mirrors approved values and rationale; token changes update both files in one changeset.

## Colors

Ink is the trust color and primary dark surface. Cobalt is reserved for primary actions and the route signal. Teal marks guidance and progress on ink. Coral is a limited attention/focus accent. Fog and white alternate surfaces without relying on large empty areas. Muted text must remain WCAG AA at normal text sizes; decorative tints are never used for essential copy.

| DESIGN.md token | Runtime token | Main consumers |
|---|---|---|
| `colors.primary` | `--cobalt` | canonical primary action alias |
| `colors.ink` | `--ink` | headings, dark sections, primary text |
| `colors.cobalt` | `--cobalt` | primary CTA, active route, links |
| `colors.teal` | `--teal` | dark-surface accents, progress |
| `colors.coral` | `--coral` | focus ring, small emphasis |
| `colors.fog` | `--fog` | page background, soft cards |
| `colors.white` | `--white` | cards, inverse text |
| `colors.muted` | `--muted` | secondary copy |
| `colors.border` | `--border` | rules and card borders |

## Typography

Syne carries the brand in concise display headings only. Manrope carries all body, navigation, prices, labels, and legal copy. Body copy starts at 1rem with generous line height. Operational labels stay at or above 0.75rem and never carry essential information by low contrast alone. Headline line lengths are intentionally short; no hero headline should exceed roughly three lines on a 390 px viewport.

## Layout

The content frame is capped at 78rem with fluid side gutters. Desktop sections use approximately 4.5rem vertical padding and mobile sections approximately 3rem. The header is 4.5rem high. The hero is content-sized rather than viewport-sized and should reveal the next content band on common laptop screens. Services and prices are one section; process and decision factors are one section; FAQ and booking share one closing section. No decorative block may create a standalone mobile viewport.

## Elevation & Depth

Hierarchy comes from tonal surfaces and one-pixel borders. Shadows are reserved for the route panel, primary booking card, and open popovers; static content cards remain mostly flat. The sticky header uses a light blur without moving layout.

## Shapes

Controls use an 8 px family, compact labels use pills, and cards use 8–16 px radii according to scale. The circular route nodes are the only repeated circular motif. Avoid mixing unrelated organic shapes.

## Components

### Foundational visual states

Interactive elements have explicit default, hover, active, and visible keyboard-focus states. Disabled booking controls do not behave like links. Reduced-motion mode removes the route entrance and hover translations. Forced-colors mode preserves native outlines and readable borders.

### Buttons and actions

The primary action is cobalt on white or white on cobalt. Secondary actions are quiet outline/text links. Every primary action is at least 46 px high, with touch targets at least 44 px. Labels state what happens: book, compare, or view details.

### Navigation and data display

Desktop navigation exposes only services, process, pricing, FAQ, language, and one booking CTA. Mobile removes the content navigation but keeps language and booking. Prices use semantic definition lists or tables, not visual-only div rows.

### Forms and overlays

The site has no first-party data-entry form. Cal.com remains an external link and is never embedded without a separate consent/privacy review. Native details/summary provides FAQ disclosure without client JavaScript.

### Iconography

Use simple typographic arrows and CSS route geometry only where they communicate direction. Do not use decorative icon sets or unlabeled icon-only controls.

### Motion

One brief route-panel entrance may run on initial load. Hover motion is subtle and never required to understand the interface. All motion is disabled under `prefers-reduced-motion`.

### Content and data visualization

The voice is candid, calm, and specific. It avoids prestige theater, guarantees, and fabricated proof. Prices are labeled as fixed or starting amounts. Admissions outcomes remain controlled by universities and scholarship bodies.

## Do's and Don'ts

- **Do:** Put the proposition, primary action, transparent starting range, and independence signal in the first viewport.
- **Do:** Keep the route metaphor functional and compact across all six language options.
- **Do:** Use real founder credentials, evidence, and testimonials only when supplied and verifiable.
- **Don't:** Create premium feeling by adding blank vertical space or oversized decorative scenes.
- **Don't:** imply university partnerships, guaranteed admission, scholarship outcomes, or verified results without evidence.
