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
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: "/auth/callback",
      },
    });
  };

  return { user, signOut, signInWithGoogle };
}
