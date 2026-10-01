export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://adriaadmissions.com').replace(/\/$/, '');

function normalizedHttpsUrl(value: string | undefined): string {
  if (!value) return '';
  try {
    const url = new URL(value.trim());
    return url.protocol === 'https:' ? url.toString() : '';
  } catch {
    return '';
  }
}

function normalizedEmail(value: string | undefined): string {
  const email = value?.trim() ?? '';
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? email : '';
}

const defaultCalendarLink = 'https://calendly.com/adria-admissions';
const defaultContactEmail = 'adria.admissions@gmail.com';

export const calendarLink = normalizedHttpsUrl(process.env.NEXT_PUBLIC_CAL_LINK || defaultCalendarLink);
export const contactEmail = normalizedEmail(process.env.NEXT_PUBLIC_CONTACT_EMAIL || defaultContactEmail);
const legalInformationReady = process.env.NEXT_PUBLIC_LEGAL_READY === 'true';
export const publicLaunchReady = process.env.NEXT_PUBLIC_PUBLIC_LAUNCH === 'true'
  && legalInformationReady
  && Boolean(calendarLink)
  && Boolean(contactEmail);

export const brandName = 'Adria Admissions';
