import { useState, useEffect } from "react";
import type { User } from "@supabase/supabase-js";
import supabase from "@/lib/supabase/client/instance";

export default function useAuth() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const getUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      setUser(user);
    };

    getUser();
  }, []);

  const signOut = async () => {
    await supabase.auth.signOut();
    setUser(null);
  };

  const signInWithGoogle = async () => {
    /**
     * Helper function for auth `redirectTo`.
     * See more: https://supabase.com/docs/guides/auth/redirect-urls
     */
    const getURL = () => {
      let url =
        process?.env?.NEXT_PUBLIC_SITE_URL ?? // Set this to your site URL in production env.
        process?.env?.NEXT_PUBLIC_VERCEL_URL ?? // Automatically set by Vercel.
        "http://localhost:3000/";
      // Make sure to include `https://` when not localhost.
      url = url.includes("http") ? url : `https://${url}`;
      // Make sure to include a trailing `/`.
      url = url.charAt(url.length - 1) === "/" ? url : `${url}/`;
      return url;
    };

    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: { redirectTo: getURL() },
    });
  };

  return { user, signOut, signInWithGoogle };
}
