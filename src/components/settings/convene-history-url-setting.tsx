"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useConveneHistory } from "@/hooks/useConveneHistory";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { SettingCardSkeleton } from "./setting-card-skeleton";
import isValidConveneHistoryUrl from "@/lib/isValidConveneHistoryUrl";
import { FileQuestion, Trash } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import { toast } from "sonner";
import { useTranslations } from "next-intl";

export default function ConveneHistoryUrlSetting() {
  const t = useTranslations("Settings.ConveneHistoryUrlSetting");

  const {
    conveneHistoryUrl: localConveneHistoryUrl,
    saveConveneHistoryUrl: saveLocalConveneHistoryUrl,
    removeConveneHistoryUrl: removeLocalConveneHistoryUrl,
  } = useConveneHistory();
  const [conveneHistoryUrlInput, setConveneHistoryUrlInput] = useState<string>(
    localConveneHistoryUrl,
  );
  const [isLoading, setIsLoading] = useState(true);
  const [isClicked, setIsClicked] = useState(false);

  const isValidConveneHistoryUrlInput = isValidConveneHistoryUrl(
    conveneHistoryUrlInput,
  );

  useEffect(() => {
    setIsLoading(false);
  }, []);

  useEffect(() => {
    setConveneHistoryUrlInput(localConveneHistoryUrl);
  }, [localConveneHistoryUrl]);

  if (isLoading) {
    return <SettingCardSkeleton />;
  }

  const handleSave = () => {
    if (!isValidConveneHistoryUrlInput) {
      return toast.error(`${t("Please input a valid Convene History URL")}.`);
    }

    saveLocalConveneHistoryUrl(conveneHistoryUrlInput);

    toast.success(t("Successfully imported Convene History URL locally!"));
  };

  const handleDelete = async () => {
    removeLocalConveneHistoryUrl();
    setConveneHistoryUrlInput("");
    toast.error(`${t("Deleted local history data")}.`);
  };

  return (
    <Card>
      <CardHeader className="pb-6">
        <CardTitle>Convene History Data</CardTitle>
        <CardDescription>
          Export or change your Convene History URL here.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <Input
            className={cn({
              "border-red-500 focus-visible:ring-0 focus-visible:outline-none":
                isClicked && !isValidConveneHistoryUrlInput,
            })}
            id="wuwa-convene-url"
            placeholder="Your Convene History URL"
            required
            onChange={(e) => {
              setConveneHistoryUrlInput(e.target.value);
            }}
            onClick={() => {
              setIsClicked(true);
            }}
            value={conveneHistoryUrlInput ?? ""}
          />
        </form>
      </CardContent>
      <CardFooter className="border-t px-6 py-4">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                className="mr-2 h-11 w-11"
                variant="ghost"
                size="icon"
                type="button"
                asChild
              >
                <Link href="/import">
                  <FileQuestion className="h-4 w-4" />
                </Link>
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Go to Import Tutorial</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                onClick={handleDelete}
                disabled={!conveneHistoryUrlInput}
                className="ml-auto mr-2 h-11 w-11"
                variant="outline"
                size="icon"
                type="button"
              >
                <Trash className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Delete your local data</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <Button variant="secondary" onClick={handleSave}>
          Save
        </Button>
      </CardFooter>
    </Card>
  );
}
