import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // تجاهل المسارات الداخلية والثابتة
  if (request.nextUrl.pathname.startsWith('/_next') || 
      request.nextUrl.pathname.startsWith('/api') ||
      request.nextUrl.pathname.startsWith('/images/') ||
      request.nextUrl.pathname === '/favicon.ico' ||
      request.nextUrl.pathname === '/') {
    return NextResponse.next();
  }

  try {
    // التحقق من وجود المسار
    const url = request.nextUrl.clone();
    const segments = url.pathname.split('/').filter(Boolean);
    
    // السماح بالمسارات المعروفة
    const validPaths = ['about', 'services', 'portfolio', 'partners', 'contact'];
    if (segments.length === 1 && validPaths.includes(segments[0])) {
      return NextResponse.next();
    }

    // إعادة التوجيه إلى 404 للمسارات غير المعروفة
    return NextResponse.rewrite(new URL('/404', request.url));
  } catch (error) {
    console.error('Middleware error:', error);
    return NextResponse.rewrite(new URL('/404', request.url));
  }
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};