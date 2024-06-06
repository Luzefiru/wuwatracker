import { createBrowserClient } from "@supabase/ssr";
import env from "@/config/env";
import { Database } from "@/types/Database";

export const createClient = () => {
  if (!env.NEXT_PUBLIC_SUPABASE_URL || !env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
    if (env.NODE_ENV === "production") {
      throw new Error(
        "Supabase environment variables are missing in production.",
      );
    } else {
      console.warn(
        "Supabase environment variables are missing. Authentication features will be disabled.",
      );
      return null;
    }
  }

  return createBrowserClient<Database>(
    env.NEXT_PUBLIC_SUPABASE_URL,
    env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  );
};
