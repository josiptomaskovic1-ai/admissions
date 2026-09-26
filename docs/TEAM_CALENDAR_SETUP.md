# The Candidate Studio — team calendar setup

Last verified: 2026-09-26  
Recommended provider: Cal.com Teams

## Decision and operating cost

Use one Cal.com Teams workspace for the three advisers and publish a single team round-robin event. Cal.com lists Teams at USD 12 per user per month when billed annually. For three seats, that is USD 36 per month or USD 432 per year before tax and currency conversion.

Verify the live price before purchase because SaaS pricing can change:

- Cal.com pricing: https://cal.com/pricing
- Cal.com Teams: https://cal.com/teams

The public website must link only to the team event through the localized `/[locale]/book` redirect. It must not expose individual advisers' calendar links.

## Workspace and calendar connections

1. Create one Teams workspace and invite all three advisers with their work email addresses.
2. Each adviser connects every calendar that can make them unavailable and chooses the calendar on which confirmed calls should be created.
3. Keep individual availability under each adviser's control. The team event should use those schedules instead of maintaining a separate shared spreadsheet.
4. Configure the public event as **round robin**, with **least recently booked** as the preferred assignment method. Do not use a collective event for the public introductory call.
5. Connect the approved video-call provider and complete a test booking for every adviser.

Cal.com documents connections for Google, Outlook and Apple/iCloud calendars. Apple/iCloud uses an app-specific password:

- Google Calendar connection: https://cal.com/docs/atoms/google-calendar-connect
- Outlook Calendar connection: https://cal.com/docs/atoms/outlook-calendar-connect
- Apple Calendar connection: https://cal.com/docs/atoms/apple-calendar-connect

## Public introductory event

Use these settings for the public event:

| Setting | Value |
|---|---|
| Event type | Team round robin |
| Client-facing duration | 20 minutes |
| Post-call buffer | 10 minutes |
| Assignment | Least recently booked |
| Minimum notice | 24 hours |
| Booking window | Rolling 21 days |
| Daily limit | Maximum 4 introductory calls per adviser |
| Time zone | Detect from the booker's device, with a visible manual override |
| Confirmation | Immediately after booking |
| Reminders | 24 hours and 2 hours before the call |

The 10-minute buffer is internal operating time. Do not describe the appointment as a 30-minute call on the website or in confirmation messages.

Primary product references for these controls:

- Round-robin setup and assignment options: https://cal.com/blog/round-robin-scheduling-guide
- Minimum-notice control: https://cal.com/blog/setting-up-minimum-notice-period-in-scheduling
- Buffers and booking limits: https://cal.com/blog/what-is-buffer-time-learn-how-to-use-buffer-times-in-scheduling

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

Cal.com's terms state that users must be at least 18. Review the current terms, privacy notice and data-processing materials before activation:

- Terms: https://cal.com/terms
- Privacy notice: https://cal.com/privacy
- Trust centre and DPA materials: https://trust.cal.com/

Document a retention rule before launch. A practical starting point is to delete unqualified introductory-call records after six months unless another legal basis or contractual need applies.

## Internal exception event

Create a separate, unlisted 45-minute collective event only for cases where two advisers genuinely need to attend. Share it manually after triage. It must not replace the public round-robin event.

## Website connection

After the team event has passed the acceptance checks below, set its public URL as `NEXT_PUBLIC_CAL_LINK`. The site should keep the external provider behind `/{locale}/book`, so changing the scheduling provider later does not require changing public calls to action.

Do not place API keys, calendar credentials, adviser email addresses or app-specific passwords in repository files or public environment examples.

## Acceptance checks before activation

- Book one test call for each adviser and confirm that all connected busy events prevent conflicts.
- Confirm that round-robin assignment rotates as expected and respects individual availability.
- Confirm that the 10-minute post-call buffer blocks the remainder of the 30-minute operating slot.
- Confirm correct time-zone conversion on desktop and mobile.
- Confirm the booking, cancellation, rescheduling and reminder emails in all supported client languages used by the team.
- Confirm that the form contains only the approved intake fields and that the under-18 instruction is visible.
- Sign or otherwise complete the required data-processing review and record the retention decision.
- Test the localized website links for Croatian, Bosnian, Serbian/Montenegrin, English, German and French.
- Keep the website private and non-indexed until the broader legal launch checklist is complete.
