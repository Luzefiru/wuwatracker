"use client";

import { useState, useRef } from "react";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { Import, FileQuestion, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import createImportScript from "@/lib/createImportScript";
import { useConveneHistory } from "@/hooks/useConveneHistory";
import { TooltipProvider } from "@/components/ui/tooltip";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useRouter } from "next/navigation";
import { useHover } from "usehooks-ts";
import Link from "next/link";
import isValidConveneHistoryUrl from "@/lib/isValidConveneHistoryUrl";
import isValidGamePath from "@/lib/isValidGamePath";
import getFirstConveneBannerHref from "@/lib/getFirstConveneBannerHref";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export function AndroidImportTutorial() {
  const router = useRouter();
  const { saveConveneHistoryUrl } = useConveneHistory();
  const [conveneHistoryUrl, setConveneHistoryUrl] = useState("");
  const isValidUrlInput = isValidConveneHistoryUrl(conveneHistoryUrl);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!isValidGamePath) {
      return toast.error("Invalid Game Path");
    } else if (!isValidConveneHistoryUrl) {
      return toast.error("Invalid Convene History URL");
    }

    saveConveneHistoryUrl(conveneHistoryUrl);

    toast.success("Successfully imported Convene History URL!");
    router.push(getFirstConveneBannerHref());
  };

  return (
    <>
      <TooltipProvider>
        <form onSubmit={handleSubmit}>
          <ol className="relative border-s ms-3 mt-4">
            <li className="mb-10 ms-8">
              <span className="absolute -start-4 bg-accent rounded-full w-8 h-8 p-3 flex justify-center items-center">
                <p className="text-sm">1</p>
              </span>
              <h3 className="flex items-center mb-1 text-lg font-semibold text-foreground">
                Use Ascent To Get Convene History URL
              </h3>
              <p className="mb-4 text-base font-normal text-muted-foreground">
                Similar to getting your history in Genshin Impact or Honkai Star
                Rail, follow{" "}
                <Link
                  className="text-yellow-500 hover:text-yellow-600"
                  href="https://gist.github.com/Mirai0009/8615e52e09083de9c0ea2dc00dc62ea8"
                  target="_blank"
                >
                  this guide by Mirai0009
                </Link>{" "}
                to download and use{" "}
                <Link
                  className="text-yellow-500 hover:text-yellow-600"
                  href="https://github.com/4o3F/Ascent/releases/tag/2.1.6"
                  target="_blank"
                >
                  Ascent
                </Link>{" "}
                (v2.1.6) to get your URL.
              </p>
              <Alert>
                <Info className="w-4 h-4" />
                <AlertTitle>Note</AlertTitle>
                <AlertDescription>
                  Wuwa Tracker is not directly associated with Ascent, so please
                  use this method at your own risk.
                </AlertDescription>
              </Alert>
              <ul className="flex flex-col gap-2 md:ps-8 md:list-disc mt-2 mb-4">
                <li>
                  <p className="text-sm font-normal text-muted-foreground">
                    This method only supports Android versions 11 and above.
                  </p>
                </li>
                <li>
                  <p className="text-sm font-normal text-muted-foreground">
                    If it&apos;s not working properly, check the{" "}
                    <Link
                      href="https://gist.github.com/Mirai0009/8615e52e09083de9c0ea2dc00dc62ea8#troubleshooting"
                      target="_blank"
                      className="underline"
                    >
                      troubleshooting section
                    </Link>
                    .
                  </p>
                </li>
              </ul>
            </li>
            <li className="mb-10 ms-8">
              <span className="absolute -start-4 bg-accent rounded-full w-8 h-8 p-3 flex justify-center items-center">
                <p className="text-sm">2</p>
              </span>
              <h3 className="mb-4 text-lg font-semibold text-foreground">
                Paste the URL Here
              </h3>

              <div className="grid w-full items-center gap-1.5">
                <Input
                  className={cn({
                    "border-red-500 focus-visible:ring-0 focus-visible:outline-none":
                      conveneHistoryUrl && !isValidUrlInput,
                  })}
                  id="wuwa-convene-url"
                  placeholder="Your Convene History URL"
                  required
                  onChange={(e) => {
                    setConveneHistoryUrl(e.target.value);
                  }}
                />
              </div>
            </li>
            <li className="mb-10 ms-8">
              <span className="absolute -start-4 bg-accent rounded-full w-8 h-8 p-3 flex justify-center items-center">
                <p className="text-sm">3</p>
              </span>
              <h3 className="mb-4 text-lg font-semibold text-foreground">
                Press the &ldquo;Import History&rdquo; Button on this Website
              </h3>
            </li>
          </ol>

          <div className="grid md:flex gap-4 md:justify-end items-center">
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  className="h-12"
                  variant="outline"
                  size="lg"
                  type="button"
                >
                  <FileQuestion className="h-4 w-4 mr-2" /> Need Help?
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>PC Import Tutorial Video</DialogTitle>
                  <DialogDescription className="pb-4">
                    First, read this carefully read{" "}
                    <Link
                      className="text-yellow-500 hover:text-yellow-600"
                      href="https://gist.github.com/Mirai0009/8615e52e09083de9c0ea2dc00dc62ea8#troubleshooting"
                      target="_blank"
                    >
                      this text guide
                    </Link>{" "}
                    then follow this{" "}
                    <Link
                      className="text-yellow-500 hover:text-yellow-600"
                      href="https://www.youtube.com/watch?v=zFJ8QBEA0vI"
                      target="_blank"
                    >
                      YouTube video
                    </Link>{" "}
                    to get your data on Android. All credits goes to Mirai0009.
                  </DialogDescription>
                  <div className="w-full h-80 rounded-2xl overflow-hidden flex justify-center">
                    <iframe
                      className="w-full"
                      src="https://www.youtube.com/embed/zFJ8QBEA0vI?si=MHSZ7a-nbw22kCcR"
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    ></iframe>
                  </div>
                </DialogHeader>
              </DialogContent>
            </Dialog>

            <Button size="lg" type="submit">
              <Import className="mr-2 h-4 w-4" /> Import History
            </Button>
          </div>
        </form>
      </TooltipProvider>
    </>
  );
}
