import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Home } from "lucide-react";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

export default function NotFound({
  locale,
}: Readonly<{
  locale: string;
}>) {
  unstable_setRequestLocale(locale);
  const t = useTranslations("NotFound");

  return (
    <div className="flex justify-center items-center h-screen lg:py-12">
      <section className="flex flex-col items-center justify-center h-full px-8 desktop:px-0 max-w-screen-lg text-center">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-4">
          {t("Whoops!")} <br />
          {t("Are you lost")},{" "}
          <span className="text-yellow-500">{t("Rover")}</span>?
        </h1>
        <Image
          className="object-cover mask-gradient-to-b"
          src="https://cdn.wanderer.moe/wuthering-waves/emotes/T_ChatEmo_A_06.png"
          width="360"
          height="450"
          alt="404: Page Not Found"
        />
        <p className="leading-7 text-sm sm:text-lg text-muted-foreground mb-8">
          {t("The page you're looking for doesn't exist")}.
        </p>
        <Button asChild variant="default" size="lg">
          <Link href="/">
            <Home className="w-4 h-4 mr-2" /> {t("Go Home")}
          </Link>
        </Button>
      </section>
    </div>
  );
}
