import { NextRequest, NextResponse } from 'next/server';

export function proxy(request: NextRequest) {
  const ua = request.headers.get('user-agent') || '';
  const isMobile = /iPhone|Android.*Mobile|iPod/.test(ua);
  const isTablet = /iPad|Android(?!.*Mobile)/.test(ua);

  const deviceType = isMobile ? 'mobile' : isTablet ? 'tablet' : 'desktop';

  // Set on the *request* headers so Server Components can read them via headers()
  const headers = new Headers(request.headers);
  headers.set('x-device-type', deviceType);

  return NextResponse.next({ request: { headers } });
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|fonts/|images/|videos/).*)'],
};
