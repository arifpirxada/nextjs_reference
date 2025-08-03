import { NextRequest, NextResponse } from "next/server";
import loggerMiddleware from "./middlewares/logger";
import authMiddleware from "./middlewares/auth";

export function middleware(request: NextRequest) {
  loggerMiddleware(request); // Use this on all Routes

  const pathname = request.nextUrl.pathname;

  if (pathname.startsWith("/api/user")) {
    authMiddleware(request);
  }

  return NextResponse.next();
}
