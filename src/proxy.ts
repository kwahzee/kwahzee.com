import { NextRequest, NextResponse } from 'next/server';

export function proxy(request: NextRequest) {
  const ua = request.headers.get('user-agent') || '';
  const isMobile = /iPhone|Android.*Mobile|iPod/.test(ua);
  const isTablet = /iPad|Android(?!.*Mobile)/.test(ua);

  const response = NextResponse.next();
  response.headers.set(
    'x-device-type',
    isMobile ? 'mobile' : isTablet ? 'tablet' : 'desktop'
  );
  return response;
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|fonts/|images/|videos/).*)'],
};
