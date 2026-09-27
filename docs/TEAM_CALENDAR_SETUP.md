# Adria Admissions — team calendar setup

Last verified: 2026-09-26  
Current provider: Calendly

## Decision and operating model

Use the existing Adria Admissions Calendly profile for the introductory call. Keep the public profile and event branded as Adria Admissions so an individual adviser’s name is not exposed. When multiple advisers are connected, publish a single team round-robin event rather than separate personal links.

Verify current Calendly plan limits and pricing before adding team seats because SaaS pricing and included features can change.

The public website must link only to the team event through the localized `/[locale]/book` redirect. It must not expose individual advisers' calendar links.

## Workspace and calendar connections

1. Create one Teams workspace and invite all three advisers with their work email addresses.
2. Each adviser connects every calendar that can make them unavailable and chooses the calendar on which confirmed calls should be created.
3. Keep individual availability under each adviser's control. The team event should use those schedules instead of maintaining a separate shared spreadsheet.
4. Configure the public event as **round robin**, with **least recently booked** as the preferred assignment method. Do not use a collective event for the public introductory call.
5. Connect the approved video-call provider and complete a test booking for every adviser.

Each adviser should connect every calendar that can make them unavailable, choose the calendar on which confirmed calls are created and complete one test booking before the event is shared publicly.

## Public introductory event

Use these settings for the public event:

| Setting | Value |
|---|---|
| Event type | Team round robin |
| Client-facing duration | 15 minutes |
| Post-call buffer | 15 minutes |
| Assignment | Least recently booked |
| Minimum notice | 24 hours |
| Booking window | Rolling 21 days |
| Daily limit | Maximum 4 introductory calls per adviser |
| Time zone | Detect from the booker's device, with a visible manual override |
| Confirmation | Immediately after booking |
| Reminders | 24 hours and 2 hours before the call |

The 15-minute buffer is internal operating time. Do not describe the appointment as a 30-minute call on the website or in confirmation messages.

The introductory call is for mutual fit, target countries, study level, timing and the appropriate next service. It does not include a detailed profile evaluation, university shortlist or document review.

## Privacy-safe intake

Keep the scheduling form deliberately short. Ask only for:

- adult booker's full name;
- adult booker's email address;
- role: applicant aged 18 or over, or parent/legal guardian;
- intended study level;
- target country or countries;
- primary goal for the call;
- acknowledgement of the privacy notice.

Do not ask for a minor's name, date of birth, school, grades, transcripts, passport details, health information or other sensitive material in the scheduler or free-text notes. If the applicant is under 18, a parent or legal guardian must book with their own details and attend the call.

Review Calendly’s current terms, privacy notice and data-processing materials before public activation. The website links to Calendly externally and does not embed the scheduler.

Document a retention rule before launch. A practical starting point is to delete unqualified introductory-call records after six months unless another legal basis or contractual need applies.

## Internal exception event

Create a separate, unlisted 45-minute collective event only for cases where two advisers genuinely need to attend. Share it manually after triage. It must not replace the public round-robin event.

## Website connection

After the event has passed the acceptance checks below, set its public URL as `NEXT_PUBLIC_CAL_LINK`. The site keeps Calendly behind `/{locale}/book`, so changing the event or scheduling provider later does not require changing public calls to action.

Do not place API keys, calendar credentials, adviser email addresses or app-specific passwords in repository files or public environment examples.

## Acceptance checks before activation

- Book one test call for each adviser and confirm that all connected busy events prevent conflicts.
- Confirm that round-robin assignment rotates as expected and respects individual availability.
- Confirm that the 15-minute post-call buffer blocks the remainder of the 30-minute operating slot.
- Confirm correct time-zone conversion on desktop and mobile.
- Confirm the booking, cancellation, rescheduling and reminder emails in all supported client languages used by the team.
- Confirm that the form contains only the approved intake fields and that the under-18 instruction is visible.
- Sign or otherwise complete the required data-processing review and record the retention decision.
- Test the localized website links for Croatian, Bosnian, Serbian/Montenegrin, English, German and French.
- Keep the website private and non-indexed until the broader legal launch checklist is complete.
