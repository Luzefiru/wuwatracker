"use client";

import { createContext, useEffect, useState, useContext } from "react";
import { SupabaseClient } from "@supabase/supabase-js";
import { Database } from "@/types/Database";
import { User } from "@/types/User";
import getUserByUserId from "@/services/getUserByUserId";
import type { User as UserSession } from "@supabase/supabase-js";
import { createClient } from "@/lib/supabase/client";
import syncConveneHistoryUrl from "@/services/syncConveneHistoryUrl";
import extractGachaRecordQueryArgs from "@/lib/extractGachaRecordQueryArgs";
import { toast } from "sonner";

type UserContext = {
  supabase: SupabaseClient<Database> | null;
  isAuthAvailable: boolean;
  user: UserSession | null;
  isLoading: boolean;
  userData: User | null;
  signOut: (() => Promise<void>) | null;
  signInWithGoogle: ((redirectTo: string) => Promise<void>) | null;
  uploadConveneHistoryUrl:
    | ((conveneHistoryUrl: string) => Promise<void>)
    | null;
  deleteConveneHistoryUrl: (() => Promise<void>) | null;
};

const Context = createContext<UserContext>({
  supabase: null,
  isAuthAvailable: false,
  user: null,
  isLoading: false,
  userData: null,
  signOut: null,
  signInWithGoogle: null,
  uploadConveneHistoryUrl: null,
  deleteConveneHistoryUrl: null,
});

export const UserContextProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [user, setUser] = useState<UserSession | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [userData, setUserData] = useState<User | null>(null);
  const supabase = createClient();
  const isAuthAvailable = !!supabase;

  useEffect(() => {
    if (!isAuthAvailable) {
      setUser(null);
      return;
    }

    const getUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      setUser(user);
    };

    getUser();
  }, [isAuthAvailable, supabase]);

  useEffect(() => {
    if (!isAuthAvailable) {
      setUserData(null);
      return;
    }

    const fetchUserData = async () => {
      if (user) {
        setIsLoading(true);

        try {
          const fetchedUserData = await getUserByUserId(supabase, user.id);
          setUserData(fetchedUserData);
          setIsLoading(false);
        } catch (e) {
          console.error(e);
          setIsLoading(false);
        }
      }
    };

    fetchUserData();
  }, [isAuthAvailable, supabase, user]);

  if (!isAuthAvailable) {
    console.warn(
      "Supabase Auth functionality is disabled for UserContextProvider.",
    );
    return <>{children}</>;
  }

  const signOut = async () => {
    await supabase.auth.signOut();
    setUser(null);
  };

  const signInWithGoogle = async (redirectTo: string) => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: { redirectTo },
    });
  };

  /**
   * Updates an existing user account's with the localStorage Convene History URL, otherwise creates the account.
   */
  const uploadConveneHistoryUrl = async (localConveneHistoryUrl: string) => {
    if (!user) {
      console.warn("User is not logged in! Cancelling upload.");
      return;
    }

    if (userData) {
      // User data exists, upload local Convene History URL
      await syncConveneHistoryUrl(supabase, {
        ...userData,
        conveneHistoryUrl: localConveneHistoryUrl,
      });
    } else {
      const { isValidQueryArgs, queryArgs } = extractGachaRecordQueryArgs(
        localConveneHistoryUrl,
      );

      if (isValidQueryArgs) {
        await syncConveneHistoryUrl(supabase, {
          userId: user.id,
          isSharingData: true,
          conveneHistoryUrl: localConveneHistoryUrl,
          playerId: Number(queryArgs.playerId),
        });
      } else {
        toast.error("Sync Error: malformatted Convene History URL!");
      }
    }
  };

  const deleteConveneHistoryUrl = async () => {
    if (!user) {
      throw new Error("User is not logged in! Cancelling deletion.");
    }

    if (userData) {
      // User data exists, upload local Convene History URL
      await syncConveneHistoryUrl(supabase, {
        ...userData,
        conveneHistoryUrl: null,
      });
    }
  };

  return (
    <Context.Provider
      value={{
        supabase,
        isAuthAvailable,
        user,
        isLoading,
        userData,
        signOut,
        signInWithGoogle,
        uploadConveneHistoryUrl,
        deleteConveneHistoryUrl,
      }}
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
