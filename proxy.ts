import { NextResponse, type NextRequest } from 'next/server';

// proxy.ts (called middleware.ts before Next.js 16) runs before routing for
// every request that matches `config.matcher`. Keep it fast: no database calls.
export function proxy(request: NextRequest) {
  const response = NextResponse.next();
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('x-pathname', request.nextUrl.pathname);
  return response;
}

export const config = {
  // Skip static assets and image optimisation requests.
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
