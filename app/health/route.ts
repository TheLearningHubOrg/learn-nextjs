// GET /health: used by the Docker HEALTHCHECK and the CI smoke test.
export const dynamic = 'force-dynamic';

export function GET() {
  return Response.json(
    { status: 'ok', uptimeSeconds: Math.round(process.uptime()) },
    { headers: { 'Cache-Control': 'no-store' } },
  );
}
