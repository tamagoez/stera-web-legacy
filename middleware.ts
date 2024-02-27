import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  const url = req.nextUrl
  const res = NextResponse.next()
  const reqCookies = req.cookies
  
  // https://github.com/vercel/next.js/discussions/34822
  function authpage(login: boolean) {
    console.log(reqCookies.get("authmode")?.value)
    if (reqCookies.has("authmode")) return NextResponse.rewrite(new URL(`/auth`, req.url));
    const res = NextResponse.redirect(url)
    res.cookies.set({
      name: 'authmode',
      value: login ? 'login' : 'signup',
      path: '/',
    })
    return res;
  }
  if (url.pathname === "/login") return authpage(true);
  if (url.pathname === "/signup") return authpage(false);
  if (req.nextUrl.pathname.startsWith("/@")) {
    const username = req.nextUrl.pathname.slice(2)
    return NextResponse.rewrite(new URL("/user/${username}", req.url));
  }
  return res
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
}