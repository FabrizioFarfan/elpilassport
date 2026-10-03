import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const UNLOCK_COOKIE = "elc_view";
const BLANK =
  '<!doctype html><html><head><meta name="robots" content="noindex"><meta name="viewport" content="width=device-width, initial-scale=1"><title></title></head><body></body></html>';

// Candado de privacidad (template no vendido):
//  - /view  -> desbloquea (cookie) y manda al home
//  - sin cookie -> todo en blanco
//  - con cookie -> sitio normal, enlaces intactos
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === "/view") {
    const url = request.nextUrl.clone();
    url.pathname = "/";
    const res = NextResponse.redirect(url);
    res.cookies.set(UNLOCK_COOKIE, "1", {
      path: "/",
      httpOnly: true,
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 365,
    });
    return res;
  }

  const unlocked = request.cookies.get(UNLOCK_COOKIE)?.value === "1";
  if (!unlocked) {
    return new NextResponse(BLANK, {
      status: 200,
      headers: { "content-type": "text/html; charset=utf-8" },
    });
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|.*\\..*).*)"],
};
