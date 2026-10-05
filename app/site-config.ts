import type { Locale } from './content';

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
const defaultLinkedInLink = 'https://www.linkedin.com/company/adria-admissions/';
const defaultInstagramLink = 'https://www.instagram.com/adria.admissions/';

export const calendarLink = normalizedHttpsUrl(process.env.NEXT_PUBLIC_CAL_LINK || defaultCalendarLink);
export const contactEmail = normalizedEmail(process.env.NEXT_PUBLIC_CONTACT_EMAIL || defaultContactEmail);
export const linkedInLink = normalizedHttpsUrl(process.env.NEXT_PUBLIC_LINKEDIN_URL || defaultLinkedInLink);
export const instagramLink = normalizedHttpsUrl(process.env.NEXT_PUBLIC_INSTAGRAM_URL || defaultInstagramLink);
export const intakeFormLinks: Record<Locale, string> = {
  hr: normalizedHttpsUrl('https://docs.google.com/forms/d/e/1FAIpQLScmoLcyo2oCnrR1dyFvr7P6aKVEb-b9zIxHe9dMEUyCkPt5bQ/viewform'),
  bs: normalizedHttpsUrl('https://docs.google.com/forms/d/e/1FAIpQLSfITcq9vMPK_aJKJ9F8sRN27G7QTadS9JzAOJZ7xqgYpi2nPw/viewform'),
  sr: normalizedHttpsUrl('https://docs.google.com/forms/d/e/1FAIpQLScgpPpZ013R3fHO8mZua_mFaGLcCm5tE8FhIfcrWFAu6Wl27A/viewform'),
  en: normalizedHttpsUrl('https://docs.google.com/forms/d/e/1FAIpQLSemBY0pMv80aHr_Ov5cXl6zwkjSREN29D92F0boTl6Oh1Bf0A/viewform'),
  de: normalizedHttpsUrl('https://docs.google.com/forms/d/e/1FAIpQLSc4GDPSgKRr6VLk_8qGNKotBmNzApHf_SVxdwfk-xSQRQOqPQ/viewform'),
  fr: normalizedHttpsUrl('https://docs.google.com/forms/d/e/1FAIpQLScJmPmnsSzJWInVFGIIATwJ0fvdDtJvuE_1JXPZxhu_U2idmg/viewform'),
};
export const legalInformationReady = process.env.NEXT_PUBLIC_LEGAL_READY === 'true';
export const publicLaunchReady = process.env.NEXT_PUBLIC_PUBLIC_LAUNCH !== 'false'
  && Boolean(calendarLink)
  && Boolean(contactEmail);

export const brandName = 'Adria Admissions';
