import { localeForRequest, localeRedirectHeaders } from './locale-routing';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export function GET(request: Request) {
  const destination = new URL(request.url);
  destination.pathname = `/${localeForRequest(request.headers)}`;

  return new Response(null, {
    status: 307,
    headers: {
      ...localeRedirectHeaders,
      Location: `${destination.pathname}${destination.search}`,
    },
  });
}
