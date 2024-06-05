import { createBrowserClient } from "@supabase/ssr";
import env from "@/config/env";

export const createClient = () =>
  createBrowserClient(
    env.NEXT_PUBLIC_SUPABASE_URL!,
    env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  );
