const isProduction = process.env.NODE_ENV === "production";

if (
  isProduction &&
  (process.env.NEXT_PUBLIC_SUPABASE_URL === undefined ||
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY === undefined)
) {
  throw new Error("Environment variables missing.");
}

const env = {
  NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
  NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  NODE_ENV: process.env.NODE_ENV,
};

export default env;
