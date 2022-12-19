import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export default function middleware(request: NextRequest) {
  return NextResponse.redirect(new URL("/yo"), { status: 307 });
}

export const config = {
  matcher: "/about/:path*",
};
