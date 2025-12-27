import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const protectedPaths = ["/profile", "/report", "/community", "/map", "/admin"];

function isProtectedPath(pathname: string) {
  return protectedPaths.some(
    (path) => pathname === path || pathname.startsWith(`${path}/`)
  );
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (!isProtectedPath(pathname)) {
    return NextResponse.next();
  }

  const isAuthed = request.cookies.get("isAuthed")?.value === "1";

  if (isAuthed) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.pathname = "/auth";
  url.searchParams.set("redirect", pathname);
  return NextResponse.redirect(url);
}

export const config = {
  matcher: [
    "/profile/:path*",
    "/report/:path*",
    "/community/:path*",
    "/map/:path*",
    "/admin/:path*",
  ],
};
