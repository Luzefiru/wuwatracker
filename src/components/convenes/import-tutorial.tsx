"use client";

import * as React from "react";
import { useState, useRef } from "react";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { Import, FileQuestion } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import createImportScript from "@/lib/createImportScript";
import { useConveneHistory } from "@/hooks/useConveneHistory";
import Image from "next/image";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import CopyButton from "@/components/ui/copy-button";
import { useHover } from "usehooks-ts";
import Link from "next/link";

interface Props {
  redirectToHistory: () => void;
}

export function ImportTutorial({ redirectToHistory }: Props) {
  const { saveConveneHistoryUrl } = useConveneHistory();

  const [gamePath, setGamePath] = useState("");
  const [conveneHistoryUrl, setConveneHistoryUrl] = useState("");

  const codeBlockContainerRef = useRef<HTMLDivElement | null>(null);
  const isHoverCodeBlockContainer = useHover(codeBlockContainerRef); // for the conditional hover state

  const script = createImportScript(gamePath);
  const codeBlockRef = useRef<HTMLTextAreaElement | null>(null);
  // matches valid Windows paths
  const gamePathRegex =
    /^[a-zA-Z]:\\(?:[^\\/:*?"<>|\r\n]+\\)*[^\\/:*?"<>|\r\n]*$/;
  const isValidGamePath = gamePathRegex.test(gamePath);
  // matches valid Convene History API URLs
  const conveneHistoryUrlRegex =
    /^https:\/\/aki-gm-resources-oversea\.aki-game\.net\/aki\/gacha\/index\.html\#\/record\?(?=.*\bplayer_id=\w+\b)(?=.*\blang=\w+\b)(?=.*\brecord_id=\w+\b)(?=.*\bsvr_id=\w+\b).*$/;
  const isValidConveneHistoryUrl =
    conveneHistoryUrl !== "" && conveneHistoryUrlRegex.test(conveneHistoryUrl);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!isValidGamePath) {
      toast.error("Invalid Game Path");
    } else if (!isValidConveneHistoryUrl) {
      toast.error("Invalid Convene History URL");
    }

    saveConveneHistoryUrl(conveneHistoryUrl);

    toast.success("Successfully imported Convene History URL!");
    redirectToHistory();
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
                Launch Wuthering Waves on PC and Open Your In-game Convene
                History
              </h3>
              <p className="mb-4 text-base font-normal text-muted-foreground">
                Open Windows PowerShell, and then paste the
                following script.
              </p>
              <div className="flex w-full items-center space-x-2">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div
                      className="relative w-full"
                      ref={codeBlockContainerRef}
                    >
                      <Textarea
                        ref={codeBlockRef}
                        disabled
                        cols={3}
                        className="font-mono focus:outline-none focus-visible:ring-none disabled:cursor-text bg-muted"
                        value={
                          isValidGamePath
                            ? script
                            : "Input a valid installation directory first!"
                        }
                      ></Textarea>
                      {isValidGamePath && isHoverCodeBlockContainer ? (
                        <CopyButton
                          className="absolute top-2 right-2"
                          textToCopy={script}
                        />
                      ) : (
                        ""
                      )}
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Stuck? Click the “Need Help?” button</p>
                  </TooltipContent>
                </Tooltip>
              </div>
              <p className="my-4 text-sm font-normal text-muted-foreground">
                Note: The script does not edit your files, it simply extracts
                the URL from your logs. You can view the script{" "}
                <Link
                  className="text-yellow-500 hover:text-yellow-600"
                  href="https://gist.github.com/Luzefiru/19c0759bea1b9e7ef480bb39303b3f6c"
                >
                  here
                </Link>
                .
              </p>
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
                      conveneHistoryUrl && !isValidConveneHistoryUrl,
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

          <div className="grid md:flex gap-4 md:justify-end">
            <Drawer>
              <Tooltip>
                <TooltipTrigger asChild>
                  <DrawerTrigger asChild>
                    <Button variant="outline" size="lg" type="button">
                      <FileQuestion className="h-4 w-4 mr-2" /> Need Help?
                    </Button>
                  </DrawerTrigger>
                </TooltipTrigger>
                <TooltipContent>
                  <p>View a Video Tutorial</p>
                </TooltipContent>
              </Tooltip>
              <DrawerContent className="justify-center">
                <DrawerHeader>
                  <DrawerTitle className="text-3xl text-center">
                    Import Video Tutorial
                  </DrawerTitle>
                  <DrawerFooter className="text-center text-muted-foreground">
                    Note: You have to open your in-game Convene History first!
                  </DrawerFooter>
                  <DrawerDescription className="flex w-full justify-center pb-8">
                    <div className="relative w-[80%] max-w-screen-lg rounded-xl shadow-2xl self-center overflow-hidden">
                      <Image
                        src="/gif/tutorial.gif"
                        width="1893"
                        height="968"
                        alt="Import Tutorial"
                        loading="eager"
                      />
                    </div>
                  </DrawerDescription>
                </DrawerHeader>
              </DrawerContent>
            </Drawer>
            <Button size="lg" type="submit">
              <Import className="mr-2 h-4 w-4" /> Import History
            </Button>
          </div>
        </form>
      </TooltipProvider>
    </>
  );
}
