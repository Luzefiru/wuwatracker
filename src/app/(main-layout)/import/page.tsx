"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ImportTutorial } from "@/components/convenes/import-tutorial";
import { ChevronLeft } from "lucide-react";
import getFirstConveneBannerHref from "@/lib/getFirstConveneBannerHref";

export default function Import() {
  const router = useRouter();

  const handleBack = () => {
    router.push("/");
  };

  const redirectToHistory = () => {
    router.push(getFirstConveneBannerHref());
  };

  return (
    <div className="flex flex-col h-full w-full gap-3 max-w-screen-lg justify-self-center">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center sm:text-start">
        <div>
          <h2 className="scroll-m-20 text-2xl md:text-3xl font-semibold tracking-tight pb-2">
            Import Convene History
          </h2>
          <p className="text-muted-foreground">
            Note: This method is only confirmed to work with Windows 10 and
            above.
          </p>
        </div>

        <div className="flex justify-around md:justify-end w-full md:w-auto">
          <Button
            variant="outline"
            size="lg"
            className="gap-2 pr-10"
            onClick={handleBack}
          >
            <ChevronLeft className="h-5 w-5" /> Back
          </Button>
        </div>
      </div>
      <ImportTutorial redirectToHistory={redirectToHistory} />
    </div>
  );
}
