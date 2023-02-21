import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

import { verify } from '@/lib/jwt';

const PUBLIC_FILE = /\.(.*)$/;

const JWT_SECRET = process.env.KEY_SECRET as string;

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const googleSession = request.cookies.get('next-auth.session-token')?.value;

  if (
    pathname.startsWith('/_next') || // exclude Next.js internals
    pathname.startsWith('/api') || //  exclude all API routes
    pathname.startsWith('/static') || // exclude static files
    PUBLIC_FILE.test(pathname) || // exclude all files in the public folder
    googleSession // continue when authenticated with google
  ) {
    return NextResponse.next();
  }

  const tokenEmail = request.cookies
    .get('@piggyplus_token')
    ?.value.replace(/["]/g, '');

  if (pathname.includes('/dashboard')) {
    if (!tokenEmail) {
      request.nextUrl.pathname = '/login';
      return NextResponse.redirect(request.nextUrl);
    }

    try {
      await verify(tokenEmail, JWT_SECRET);
      return NextResponse.next();
    } catch (error) {
      request.nextUrl.pathname = '/login';
      return NextResponse.redirect(request.nextUrl);
    }
  }

  return NextResponse.next();
}
