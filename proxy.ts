import { NextRequest, NextResponse } from 'next/server';

const LOCALES = ['bs', 'sr', 'hr', 'en', 'de'];
const DEFAULT_LOCALE = 'bs';

function detectLocale(req: NextRequest): string {
  const cookie = req.cookies.get('virela-locale')?.value;
  if (cookie && LOCALES.includes(cookie)) return cookie;

  const accept = req.headers.get('accept-language') ?? '';
  for (const part of accept.split(',')) {
    const code = part.split(';')[0].trim().split('-')[0].toLowerCase();
    if (LOCALES.includes(code)) return code;
  }
  return DEFAULT_LOCALE;
}

export function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const locale = detectLocale(req);
  const url = req.nextUrl.clone();
  url.pathname = pathname === '/' ? `/${locale}` : `/${locale}${pathname}`;
  return NextResponse.redirect(url);
}

// Only the un-prefixed entry paths are rewritten; localized routes pass through.
export const config = {
  matcher: ['/', '/impressum', '/privacy'],
};
