import { NextRequest, NextResponse } from "next/server";
import { updateSession } from "./utils/db/session";

// これらの配列に代入されている文字列から始まるURLは、認証なしでログインすることができます
const accessibleNoAuthURL: string[] = ["/", "/auth", "/profile"]

export async function middleware(req: NextRequest) {
  const res = await updateSession(req)
  const url = req.nextUrl
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

  // ユーザー
  if (req.nextUrl.pathname.startsWith("/@")) {
    const username = req.nextUrl.pathname.slice(2)
    return NextResponse.rewrite(new URL("/user/${username}", req.url));
  }

  const isRequiredAuth = accessibleNoAuthURL.some((e: string) => {return !url.pathname.startsWith(e)})
  console.log(`[${url.pathname}] isRequiredAuth: ${isRequiredAuth}`)
  if (isRequiredAuth) {

  }

  // final response
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
    '/((?!api|_next/static|_next/image|manifest.json|favicon).*)',
  ],
}