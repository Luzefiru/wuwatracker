"use client";

import { useIsClient } from "usehooks-ts";
import useAuth from "@/hooks/useAuth";
import { useEffect } from "react";
import { useConveneHistory } from "@/hooks/useConveneHistory";
import syncConveneHistoryUrl from "@/services/syncConveneHistoryUrl";
import getUserByUserId from "@/services/getUserByUserId";
import { useState } from "react";
import { User } from "@/types/User";
import { toast } from "sonner";
import { useUserContext } from "@/contexts/userContext";

export default function SyncIndicator() {
  const isClient = useIsClient();
  const { user } = useUserContext();
  const { conveneHistoryUrl, saveConveneHistoryUrl, queryArgs } =
    useConveneHistory();
  const [fetchedUser, setFetchedUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      if (!user) {
        return;
      }

      try {
        const fetchedData = await getUserByUserId(user.id);
        setFetchedUser(fetchedData);

        if (fetchedData.conveneHistoryUrl) {
          saveConveneHistoryUrl(fetchedData.conveneHistoryUrl);
        }
      } catch (e) {
        syncConveneHistoryUrl({
          userId: user.id,
          isSharingData: true,
        });
      }
    };

    fetchUser();
  }, [user, saveConveneHistoryUrl]);

  useEffect(() => {
    // Don't do anything if there isn't a user logged in
    if (!user?.id || !fetchedUser) {
      return;
    }

    console.log("Syncing triggered...", user);

    const syncData = async () => {
      try {
        const synchronizedfetchedData = await syncConveneHistoryUrl({
          id: fetchedUser.id,
          userId: user.id,
          playerId: Number(queryArgs?.playerId),
          conveneHistoryUrl,
          isSharingData: true, // TODO - shares data by default, make an option to change this
        });

        console.log("Successfully synchronized user!", synchronizedfetchedData);
        if (synchronizedfetchedData.conveneHistoryUrl) {
          saveConveneHistoryUrl(synchronizedfetchedData.conveneHistoryUrl);
        }
      } catch (e) {
        const errorMessage = (e as Error).message;
        console.error(errorMessage);
        toast.error(errorMessage);
      }
    };

    syncData();
  });

  if (!isClient) {
    return <span className="sr-only">Attemping to sync data...</span>;
  }

  if (user) {
    return <span className="sr-only">Data is syncing in the background.</span>;
  }

  return <span className="sr-only">Sync is paused!</span>;
}
