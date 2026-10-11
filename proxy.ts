import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

const canonicalHost = 'adriaadmissions.com';

export function proxy(request: NextRequest) {
  const requestHost = request.headers.get('host')?.split(':', 1)[0].toLowerCase();

  if (requestHost !== `www.${canonicalHost}`) return NextResponse.next();

  const destination = request.nextUrl.clone();
  destination.protocol = 'https:';
  destination.hostname = canonicalHost;
  destination.port = '';

  return NextResponse.redirect(destination, 308);
}

export const config = {
  matcher: '/:path*',
};
