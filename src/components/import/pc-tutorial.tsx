"use client";

import { useState, useRef } from "react";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { Import, FileQuestion } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import createImportScript from "@/lib/createImportScript";
import { useConveneHistory } from "@/hooks/useConveneHistory";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useRouter } from "next/navigation";
import CopyButton from "@/components/ui/copy-button";
import { useHover } from "usehooks-ts";
import Link from "next/link";
import isValidConveneHistoryUrl from "@/lib/isValidConveneHistoryUrl";
import isValidGamePath from "@/lib/isValidGamePath";
import getFirstConveneBannerHref from "@/lib/getFirstConveneBannerHref";
import { useTranslations } from "next-intl";

export function PCImportTutorial() {
  const t = useTranslations("Import.TutorialTabs.PCImportTutorial");
  const router = useRouter();
  const { saveConveneHistoryUrl } = useConveneHistory();

  const [gamePath, setGamePath] = useState("");
  const [conveneHistoryUrl, setConveneHistoryUrl] = useState("");

  const codeBlockContainerRef = useRef<HTMLDivElement | null>(null);
  const isHoverCodeBlockContainer = useHover(codeBlockContainerRef); // for the conditional hover state

  const script = createImportScript(gamePath);
  const codeBlockRef = useRef<HTMLTextAreaElement | null>(null);
  const isValidPathInput = isValidGamePath(gamePath);
  const isValidUrlInput = isValidConveneHistoryUrl(conveneHistoryUrl);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!isValidGamePath) {
      return toast.error(t("Invalid Game Path"));
    } else if (!isValidConveneHistoryUrl) {
      return toast.error(t("Invalid Convene History URL"));
    }

    saveConveneHistoryUrl(conveneHistoryUrl);

    toast.success(t("Successfully imported Convene History URL!"));
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
                {t("Copy Your Installation Directory")}
              </h3>
              <p className="mb-4 text-base font-normal text-muted-foreground">
                {t(
                  'Find the folder that contains "Wuthering Waves exe" and a "Client" folder',
                )}
                .
              </p>
              <div className="grid w-full items-center gap-1.5">
                <Input
                  className={cn({
                    "border-red-500 focus-visible:ring-0 focus-visible:outline-none":
                      gamePath && !isValidPathInput,
                  })}
                  id="wuwa-install-path"
                  placeholder={t("Your installation directory")}
                  required
                  onBlur={(e) => setGamePath(e.target.value)}
                />
              </div>
              <ul className="flex flex-col gap-2 md:ps-8 md:list-disc mt-2 mb-4">
                <li>
                  <p className="text-sm font-normal text-muted-foreground">
                    {t("Warning: If you edited your")} <code>Engine.ini</code>{" "}
                    {t(
                      "file to disable logs, you'll have to re-enable them before opening your convene history, otherwise the script won't work",
                    )}
                    .
                  </p>
                </li>
              </ul>
            </li>
            <li className="mb-10 ms-8">
              <span className="absolute -start-4 bg-accent rounded-full w-8 h-8 p-3 flex justify-center items-center">
                <p className="text-sm">2</p>
              </span>
              <h3 className="flex items-center mb-1 text-lg font-semibold text-foreground">
                {t(
                  "Launch Wuthering Waves on PC and Open Your In-game Convene History",
                )}
              </h3>
              <p className="mb-4 text-base font-normal text-muted-foreground">
                {t(
                  "Afterwards, open Windows PowerShell, and then paste the following script",
                )}
                .
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
                          isValidPathInput
                            ? script
                            : t("Input a valid installation directory first!")
                        }
                      ></Textarea>
                      {isValidPathInput && isHoverCodeBlockContainer ? (
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
                    <p>{t("Stuck? Click the “Need Help?” button")}</p>
                  </TooltipContent>
                </Tooltip>
              </div>
              <ul className="flex flex-col gap-2 md:ps-8 md:list-disc mt-2 mb-4">
                <li>
                  <p className="text-sm font-normal text-muted-foreground">
                    {t(
                      "Note: The script does not edit your files, it simply extracts the URL from your logs",
                    )}
                    . {t("You can view the script")}{" "}
                    <Link
                      className="text-yellow-500 hover:text-yellow-600"
                      href="https://gist.github.com/Luzefiru/19c0759bea1b9e7ef480bb39303b3f6c"
                      target="_blank"
                    >
                      {t("here")}
                    </Link>
                    .
                  </p>
                </li>
              </ul>
            </li>
            <li className="mb-10 ms-8">
              <span className="absolute -start-4 bg-accent rounded-full w-8 h-8 p-3 flex justify-center items-center">
                <p className="text-sm">3</p>
              </span>
              <h3 className="mb-4 text-lg font-semibold text-foreground">
                {t("Paste the URL Here")}
              </h3>

              <div className="grid w-full items-center gap-1.5">
                <Input
                  className={cn({
                    "border-red-500 focus-visible:ring-0 focus-visible:outline-none":
                      conveneHistoryUrl && !isValidUrlInput,
                  })}
                  id="wuwa-convene-url"
                  placeholder={t("Your Convene History URL")}
                  required
                  onChange={(e) => {
                    setConveneHistoryUrl(e.target.value);
                  }}
                />
              </div>
            </li>
            <li className="mb-10 ms-8">
              <span className="absolute -start-4 bg-accent rounded-full w-8 h-8 p-3 flex justify-center items-center">
                <p className="text-sm">4</p>
              </span>
              <h3 className="mb-4 text-lg font-semibold text-foreground">
                {t('Press the "Import History" Button on this Website')}
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
                  <FileQuestion className="h-4 w-4 mr-2" /> {t("Need Help?")}
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>{t("PC Import Tutorial Video")}</DialogTitle>
                  <DialogDescription className="pb-4">
                    {t(
                      "Follow this step-by-step YouTube tutorial to import your data on PC",
                    )}
                    . {t("Please join our")}{" "}
                    <Link
                      className="text-yellow-500 hover:text-yellow-600"
                      href="https://discord.gg/mADnEXwZGT"
                      target="_blank"
                    >
                      {t("Discord Server")}
                    </Link>{" "}
                    {t("to ask for any help!")}
                  </DialogDescription>
                  <div className="w-full h-80 rounded-2xl overflow-hidden flex justify-center">
                    <iframe
                      className="w-full"
                      src="https://www.youtube.com/embed/Ue3T_9lZZGU?si=r4LJ5tkYinLCMbVP"
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
              <Import className="mr-2 h-4 w-4" /> {t("Import History")}
            </Button>
          </div>
        </form>
      </TooltipProvider>
    </>
  );
}
