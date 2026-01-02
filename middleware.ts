import { type NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Redirect old dashboard routes to new routes
  // /dashboard/student → /student
  // /dashboard/mentor → /mentor
  // /dashboard/admin → /admin
  // /dashboard/corporate → /corporate
  if (pathname.startsWith("/dashboard/")) {
    const role = pathname.replace("/dashboard/", "");
    if (["student", "mentor", "admin", "corporate"].includes(role)) {
      const newUrl = request.nextUrl.clone();
      newUrl.pathname = `/${role}`;
      return NextResponse.redirect(newUrl);
    }
  }

  // Allow all requests - using mock data, no auth required
  // In production with Supabase, import and call updateSession here
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
