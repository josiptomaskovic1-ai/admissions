import { isLocale } from '../../i18n';
import { calendarLink } from '../../site-config';

type Context = { params: Promise<{ locale: string }> };

export async function GET(request: Request, { params }: Context) {
  const { locale } = await params;
  const safeLocale = isLocale(locale) ? locale : 'sr';
  const destination = calendarLink || new URL(`/${safeLocale}#booking`, request.url).toString();

  return new Response(null, {
    status: 307,
    headers: {
      'Cache-Control': 'no-store',
      Location: destination,
      'X-Robots-Tag': 'noindex, nofollow',
    },
  });
}
