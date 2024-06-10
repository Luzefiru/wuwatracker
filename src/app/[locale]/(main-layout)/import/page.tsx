import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import TutorialTabs from "@/components/import/tutorial-tabs";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

export default function Import({
  params: { locale },
}: Readonly<{
  params: { locale: string };
}>) {
  unstable_setRequestLocale(locale);

  const t = useTranslations("Import");

  return (
    <div className="flex flex-col h-full w-full gap-3 max-w-screen-lg justify-self-center">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center sm:text-start">
        <div>
          <h2 className="scroll-m-20 text-2xl md:text-3xl font-semibold tracking-tight pb-2">
            {t("Import Convene History")}
          </h2>
          <p className="text-muted-foreground">
            {t(
              "Select your platform and follow the tutorial to start tracking your Convene history!",
            )}
          </p>
        </div>

        <div className="flex justify-around md:justify-end w-full md:w-auto">
          <Button asChild variant="outline" size="lg" className="gap-2 pr-10">
            <Link href="/">
              <ChevronLeft className="h-5 w-5" /> {t("Back")}
            </Link>
          </Button>
        </div>
      </div>
      <TutorialTabs />
    </div>
  );
}
