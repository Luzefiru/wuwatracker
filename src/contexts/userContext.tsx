"use client";

import { createContext, useEffect, useState, useContext } from "react";
import { SupabaseClient } from "@supabase/supabase-js";
import { Database } from "@/types/Database";
import { User } from "@/types/User";
import supabase from "@/lib/supabase/client/instance";
import useAuth from "@/hooks/useAuth";
import getUserByUserId from "@/services/getUserByUserId";
import type { User as UserSession } from "@supabase/supabase-js";

type UserContext = {
  supabase: SupabaseClient<Database>;
  user: UserSession | null;
  isLoading: boolean;
  userData: User | null;
  signOut: (() => Promise<void>) | null;
  signInWithGoogle: ((redirectTo: string) => Promise<void>) | null;
};

const Context = createContext<UserContext>({
  supabase,
  user: null,
  isLoading: false,
  userData: null,
  signOut: null,
  signInWithGoogle: null,
});

export const UserContextProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const { user, signOut, signInWithGoogle } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [userData, setUserData] = useState<User | null>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      if (user) {
        setIsLoading(true);

        try {
          const fetchedUserData = await getUserByUserId(user.id);
          setUserData(fetchedUserData);
          setIsLoading(false);
        } catch (e) {
          console.error(e);
          setIsLoading(false);
        }
      }
    };

    fetchUserData();
  }, [user]);

  return (
    <Context.Provider
      value={{ supabase, user, isLoading, userData, signOut, signInWithGoogle }}
    >
      <>{children}</>
    </Context.Provider>
  );
};

export function useUserContext() {
  const context = useContext(Context);
  if (context === undefined)
    throw new Error("userContext used outside of the provider");
  return context;
}
