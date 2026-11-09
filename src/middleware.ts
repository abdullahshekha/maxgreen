import { NextRequest, NextResponse } from "next/server";

// Old WordPress short links (/?p=24898) were indexed before the migration. The site ignores the
// query string and served the homepage (200) for every ID, so Google filed thousands of them
// as "Duplicate without user-selected canonical". Those posts have no equivalent page, so
// answer 410 Gone, which tells Google to drop them. Only "/" with a numeric `p` is touched.
export function middleware(request: NextRequest) {
  const p = request.nextUrl.searchParams.get("p");
  if (p !== null && /^\d+$/.test(p)) {
    return new NextResponse("Gone", {
      status: 410,
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "X-Robots-Tag": "noindex",
      },
    });
  }
  return NextResponse.next();
}

export const config = {
  matcher: "/",
};
