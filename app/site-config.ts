export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://virela-admissions.friesenjung.chatgpt.site').replace(/\/$/, '');

export const calendarLink = process.env.NEXT_PUBLIC_CAL_LINK?.trim() || '';
export const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim() || '';
const legalInformationReady = process.env.NEXT_PUBLIC_LEGAL_READY === 'true';
export const publicLaunchReady = process.env.NEXT_PUBLIC_PUBLIC_LAUNCH === 'true'
  && legalInformationReady
  && Boolean(calendarLink)
  && Boolean(contactEmail);

export const brandName = 'Virela Admissions';
