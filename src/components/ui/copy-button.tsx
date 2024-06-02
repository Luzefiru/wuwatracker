"use client";

interface Props {
  textToCopy: string;
  className?: string;
}

import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { Clipboard } from "lucide-react";
import { ClipboardCheck } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function CopyButton({ className, textToCopy }: Props) {
  const [isCopied, setIsCopied] = useState(false);
  let currentTimeout = 0;

  const handleCopy = () => {
    setIsCopied(true);

    // Debounce it if there is an existing timer counting down
    clearTimeout(currentTimeout);
    currentTimeout = window.setTimeout(() => {
      setIsCopied(false);
    }, 3000);

    const copyToClipboard = async () => {
      try {
        navigator.clipboard.writeText(textToCopy);
        toast.success("Successfully copied to clipboard!");
      } catch (e) {
        toast.error("Could not copy to clipboard!");
      }
    };

    copyToClipboard();
  };

  return (
    <>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant={isCopied ? "success" : "outline"}
              size="icon"
              onClick={handleCopy}
              className={className}
              type="button"
            >
              {isCopied ? (
                <ClipboardCheck className="h-4 w-4" />
              ) : (
                <Clipboard className="h-4 w-4" />
              )}
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Click to copy</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </>
  );
}
