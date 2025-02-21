import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Check if the request is for a non-existent page
  if (!request.nextUrl.pathname.startsWith('/_next') && 
      !request.nextUrl.pathname.startsWith('/api')) {
    try {
      // Try to match the URL to your app's routes
      const url = request.nextUrl.clone();
      
      // If no matching route is found, redirect to 404
      if (!url.pathname.startsWith('/images/') && 
          !url.pathname.startsWith('/favicon.ico')) {
        return NextResponse.rewrite(new URL('/404', request.url));
      }
    } catch (error) {
      console.error('Middleware error:', error);
      return NextResponse.rewrite(new URL('/404', request.url));
    }
  }
  
  return NextResponse.next();
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