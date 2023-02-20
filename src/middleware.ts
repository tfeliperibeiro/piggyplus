import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

import { verify } from './lib/jwt';

const PUBLIC_FILE = /\.(.*)$/;

const JWT_SECRET = process.env.KEY_SECRET as string;

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith('/_next') || // exclude Next.js internals
    pathname.startsWith('/api') || //  exclude all API routes
    pathname.startsWith('/static') || // exclude static files
    PUBLIC_FILE.test(pathname) // exclude all files in the public folder
  )
    return NextResponse.next();

  const tokenEmail = request.cookies
    .get('@piggyplus')
    ?.value.replace(/["]/g, '');

  console.log(tokenEmail);

  if (pathname.includes('/dashboard') && !tokenEmail) {
    request.nextUrl.pathname = '/login';
    return NextResponse.redirect(request.nextUrl);
  }

  try {
    if (pathname.includes('/dashboard') && tokenEmail) {
      await verify(tokenEmail, JWT_SECRET);
      return NextResponse.next();
    }
  } catch (error) {
    request.nextUrl.pathname = '/login';
    return NextResponse.redirect(request.nextUrl);
  }
}
