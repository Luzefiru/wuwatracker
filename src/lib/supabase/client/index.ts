import { createBrowserClient } from "@supabase/ssr";
import env from "@/config/env";
import { Database } from "@/types/Database";

export const createClient = () =>
  createBrowserClient<Database>(
    env.NEXT_PUBLIC_SUPABASE_URL!,
    env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  );
