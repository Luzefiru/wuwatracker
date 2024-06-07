"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { SettingCardSkeleton } from "./setting-card-skeleton";
import { useIsClient } from "usehooks-ts";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { ConfirmationDialog } from "@/components/ui/confirmation-dialog";
import { useUserContext } from "@/contexts/userContext";
import { RefreshCw, LogOut } from "lucide-react";
import { useState } from "react";
import { useConveneHistory } from "@/hooks/useConveneHistory";
import extractGachaRecordQueryArgs from "@/lib/extractGachaRecordQueryArgs";

export default function CloudSyncSetting() {
  const isClient = useIsClient();
  const [isOpenOverwriteDialog, setIsOpenOverwriteDialog] = useState(false);
  useState(false);
  const { user, userData, signOut, signInWithGoogle, uploadConveneHistoryUrl } =
    useUserContext();
  const [isSyncing, setIsSyncing] = useState(false);
  const {
    conveneHistoryUrl: localConveneHistoryUrl,
    saveConveneHistoryUrl: saveLocalConveneHistoryUrl,
    queryArgs: localQueryArgs,
  } = useConveneHistory();

  // We use URL because playerId in the database is not consistent
  const { queryArgs: googleQueryArgs } = extractGachaRecordQueryArgs(
    userData?.conveneHistoryUrl ?? "",
  );

  if (!isClient || !signOut || !signInWithGoogle) {
    return <SettingCardSkeleton />;
  }

  const handleSignOut = async () => {
    await signOut();
    toast.success("Signed out successfully.");
  };

  const handleSync = async () => {
    if (!user || !userData) {
      return toast.error("You must login before being able to sync.");
    }

    setIsSyncing(true);

    // If the user has no data at all
    if (!userData.conveneHistoryUrl && !localConveneHistoryUrl) {
      toast.error("Import your data first to start syncing!");
    }
    // If the user has no cloud saved URL yet
    else if (!userData.conveneHistoryUrl && uploadConveneHistoryUrl) {
      uploadConveneHistoryUrl(localConveneHistoryUrl);
    }
    // If they don't have local history data
    else if (!localConveneHistoryUrl) {
      setIsOpenOverwriteDialog(true);
    }
    // They have both, but are different
    else if (
      userData.conveneHistoryUrl &&
      localConveneHistoryUrl &&
      localConveneHistoryUrl !== userData.conveneHistoryUrl
    ) {
      setIsOpenOverwriteDialog(true);
    }
    // They have both & they're the same
    else {
      toast.success("Data is in sync with your Google Account.");
    }

    setIsSyncing(false);
  };

  const handlePickGoogleData = () => {
    if (userData && userData.conveneHistoryUrl) {
      saveLocalConveneHistoryUrl(userData.conveneHistoryUrl);
    }
    setIsOpenOverwriteDialog(false);
  };

  const handlePickBrowserData = async () => {
    if (uploadConveneHistoryUrl) {
      await uploadConveneHistoryUrl(localConveneHistoryUrl);
      setIsOpenOverwriteDialog(false);
    }
  };

  return (
    <Card>
      <CardHeader className="pb-6">
        <CardTitle className="relative">
          <div className="flex gap-2.5">
            Cloud Backup
            {!!user && (
              <span className="relative flex h-3.5 w-3.5">
                <span
                  className={cn(
                    "animate-pulse absolute inline-flex h-full w-full rounded-full opacity-75",
                    localConveneHistoryUrl === userData?.conveneHistoryUrl
                      ? "bg-green-500"
                      : "bg-destructive",
                  )}
                ></span>
                <span
                  className={cn(
                    "relative inline-flex rounded-full h-3.5 w-3.5 animate-ping",
                    localConveneHistoryUrl === userData?.conveneHistoryUrl
                      ? "bg-green-500"
                      : "bg-destructive",
                  )}
                ></span>
              </span>
            )}
          </div>
        </CardTitle>
        <CardDescription>
          Save your data using your Google Account and access your data in any
          device. Once logged in, just click the &quot;Sync Data&quot; button to
          upload or download your data into your device.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-wrap gap-3 items-center content-center">
        <p className="text-sm mr-auto text-muted-foreground truncate max-w-52">
          {user?.email ?? "Guest"}
        </p>
        {!user ? (
          <ConfirmationDialog
            title="Warning: this feature is still experimental!"
            description="Cloud sync is not guaranteed to work in all scenarios as it is a new website feature. By proceeding, you understand the risk that you may lose your previously imported URL. Would you still like to use cloud sync?"
            cancelText="Cancel"
            continueText="I understand the risks"
            onContinue={() => {
              signInWithGoogle(window.location.href);
            }}
            triggerChildren={
              <Button size="lg">
                <svg
                  className="h-4 w-4 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                  <path d="M1 1h22v22H1z" fill="none" />
                </svg>
                Sign In with Google
              </Button>
            }
          />
        ) : (
          <div className="flex gap-2">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    className={cn("h-11 w-11 transition-colors", {
                      "bg-accent": isSyncing,
                    })}
                    variant="outline"
                    size="icon"
                    type="button"
                    onClick={handleSignOut}
                    disabled={!userData}
                  >
                    <LogOut
                      className={cn("h-4 w-4", { "animate-spin": isSyncing })}
                    />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Log Out</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <Button variant="secondary" size="lg" onClick={handleSync}>
              <RefreshCw
                className={cn("h-4 w-4 mr-2", { "animate-spin": isSyncing })}
              />
              Sync Data
            </Button>
          </div>
        )}
      </CardContent>
      <ConfirmationDialog
        title="Your local browser data is different from your Google Account data."
        description={`Your local data with player ID (${localQueryArgs?.playerId ?? "N/A"}) conflicts with your Google Account's player ID (${googleQueryArgs?.playerId ?? "N/A"}). Would you like to keep your browser's local data or would you like to use your Google Account data instead?`}
        open={isOpenOverwriteDialog}
        continueText="Google Data"
        onContinue={handlePickGoogleData}
        cancelText="Browser Data"
        onCancel={handlePickBrowserData}
      />
    </Card>
  );
}
