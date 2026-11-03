import type { NextRequest } from 'next/server';
import { getTopics, isLevel } from '@/lib/topics';

// GET /api/topics?level=beginner returns JSON for other clients (mobile apps,
// scripts). Pages in this app read lib/topics directly instead.
export function GET(request: NextRequest) {
  const level = request.nextUrl.searchParams.get('level');
  if (level !== null && !isLevel(level)) {
    return Response.json({ error: `Unknown level "${level}"` }, { status: 400 });
  }
  return Response.json({ topics: getTopics(level ?? undefined) });
}
