export const dynamic = 'force-static';
export const revalidate = false;

export function GET() {
  return new Response(null, {
    status: 307,
    headers: {
      'Cache-Control': 'public, max-age=300, s-maxage=31536000, stale-while-revalidate=86400',
      Location: '/sr',
    },
  });
}
