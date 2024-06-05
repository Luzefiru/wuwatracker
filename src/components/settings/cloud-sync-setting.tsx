"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SettingCardSkeleton } from "./setting-card-skeleton";
import { useIsClient } from "usehooks-ts";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import useAuth from "@/hooks/useAuth";

export default function CloudSyncSetting() {
  const isClient = useIsClient();
  const { user, signOut, signInWithGoogle } = useAuth();

  if (!isClient) {
    return <SettingCardSkeleton />;
  }

  const handleSignOut = async () => {
    await signOut();
    toast.success("Signed out successfully.");
  };

  return (
    <Card>
      <CardHeader className="pb-6">
        <CardTitle className="relative">
          <div className="flex gap-2.5">
            Cloud Backup
            <span className="relative flex h-3.5 w-3.5">
              <span
                className={cn(
                  "animate-pulse absolute inline-flex h-full w-full rounded-full opacity-75",
                  user ? "bg-green-500" : "bg-destructive",
                )}
              ></span>
              <span
                className={cn(
                  "relative inline-flex rounded-full h-3.5 w-3.5 animate-ping",
                  user ? "bg-green-500" : "bg-destructive",
                )}
              ></span>
            </span>
          </div>
        </CardTitle>
        <CardDescription>
          Save your data using your Google Account and access your data in any
          device.
        </CardDescription>
      </CardHeader>
      <CardContent>
        {!user ? (
          <Button
            size="lg"
            onClick={() => {
              signInWithGoogle(window.location.href);
            }}
          >
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
        ) : (
          <Button variant="outline" size="lg" onClick={handleSignOut}>
            Sign out
          </Button>
        )}
      </CardContent>
    </Card>
  );
}
