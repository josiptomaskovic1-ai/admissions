import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { localeForRequest, localeRedirectHeaders } from './app/locale-routing';

const canonicalHost = 'adriaadmissions.com';

export function proxy(request: NextRequest) {
  const requestHost = request.headers.get('host')?.split(':', 1)[0].toLowerCase();
  const isCanonicalHostRedirect = requestHost === `www.${canonicalHost}`;
  const isLocaleEntry = request.nextUrl.pathname === '/';

  if (!isCanonicalHostRedirect && !isLocaleEntry) return NextResponse.next();

  const destination = request.nextUrl.clone();
  if (isCanonicalHostRedirect) {
    destination.protocol = 'https:';
    destination.hostname = canonicalHost;
    destination.port = '';
  }

  if (isLocaleEntry) {
    destination.pathname = `/${localeForRequest(request.headers)}`;
    const response = NextResponse.redirect(destination, 307);
    for (const [key, value] of Object.entries(localeRedirectHeaders)) response.headers.set(key, value);
    return response;
  }

  return NextResponse.redirect(destination, 308);
}

export const config = {
  matcher: '/:path*',
};
