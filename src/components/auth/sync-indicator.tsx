"use client";

import { useIsClient } from "usehooks-ts";
import { useEffect } from "react";
import { useConveneHistory } from "@/hooks/useConveneHistory";
import { useUserContext } from "@/contexts/userContext";

export default function SyncIndicator() {
  const isClient = useIsClient();
  const { user, userData, uploadConveneHistoryUrl } = useUserContext();
  const { conveneHistoryUrl, saveConveneHistoryUrl } = useConveneHistory();

  useEffect(() => {
    // Don't do anything if there isn't a user logged in
    if (!user || !userData) {
      return;
    }

    if (userData.conveneHistoryUrl) {
      saveConveneHistoryUrl(userData.conveneHistoryUrl);
    } else {
      if (uploadConveneHistoryUrl) {
        uploadConveneHistoryUrl(conveneHistoryUrl);
      }
    }
  });

  if (!isClient) {
    return <span className="sr-only">Attemping to sync data...</span>;
  }

  if (user) {
    return <span className="sr-only">Data is syncing in the background.</span>;
  }

  return <span className="sr-only">Sync is paused!</span>;
}
