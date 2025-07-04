import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { getCurrentUser } from 'aws-amplify/auth/server'
import { runWithAmplifyServerContext } from "./lib/amplify-server";

export default async function middleware(req: NextRequest) {

  const token = await runWithAmplifyServerContext({
        nextServerContext: { cookies },
        async operation(ctx) {
        return getCurrentUser(ctx)
        }
    }).catch(() => null)
  const pathname = req.nextUrl.pathname;

  if (pathname === "/auth/login" || pathname === "/auth/signup") {
    if (token) {
      return NextResponse.redirect(new URL("/", req.url));
    }
  }

   if (!token && pathname !== "/auth/login" && pathname !== "/auth/signup") {
    return NextResponse.redirect(new URL("/auth/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|auth|_next/static|_next/image|.*\\.png$).*)'],
}
