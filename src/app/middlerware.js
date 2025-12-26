import { NextResponse } from "next/server"

export function middleware(request) {
  const isLoggedIn = request.cookies.get("auth")?.value === "true"
  const { pathname } = request.nextUrl

  if (pathname.startsWith("/products") && !isLoggedIn) {
    const loginUrl = new URL("/login", request.url)
    loginUrl.searchParams.set("redirect", pathname)
    return NextResponse.redirect(loginUrl)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/products/:path*"]
}
