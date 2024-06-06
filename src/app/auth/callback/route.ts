import { createClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get("code");
  const origin = requestUrl.origin;

  if (code) {
    const supabase = createClient();
    if (supabase) {
      await supabase.auth.exchangeCodeForSession(code);
    } else {
      console.warn(
        "Supabase client not initialized. Skipping session exchange.",
      );
      // TODO: Optionally handle this case, e.g., by redirecting to an error page
    }
  }

  // URL to redirect to after sign up process completes
  return NextResponse.redirect(`${origin}/settings`);
}
