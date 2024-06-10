import { type NextRequest } from "next/server";
import { updateSession } from "@/lib/supabase/middleware";
import locales from "./config/locales";

export async function middleware(request: NextRequest) {
  return await updateSession(request);
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - images - .svg, .png, .jpg, .jpeg, .gif, .webp
     * Feel free to modify this pattern to include more paths.
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
    /**
     * Match internationalized paths & base path.
     */
    "/",
    `/(br|de|en|es|fil|fr|id|in|it|ja|ko|ms|sv|th|uk|vi|zh)/:path*`,
  ],
};
