export const dynamic = 'force-static';
export const revalidate = false;

export function GET() {
  return new Response(null, {
    status: 307,
    headers: {
      'Cache-Control': 'public, max-age=0, must-revalidate, s-maxage=300, stale-while-revalidate=60',
      Location: '/sr',
    },
  });
}
