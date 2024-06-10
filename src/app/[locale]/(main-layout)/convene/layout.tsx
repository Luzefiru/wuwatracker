import { Import } from "lucide-react";
import { Sidebar } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params: { locale },
}: Readonly<{
  params: { locale: string };
}>) {
  const t = await getTranslations({ locale, namespace: "Metadata.History" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function ConveneLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  unstable_setRequestLocale(locale);
  const t = useTranslations("Header");

  return (
    <>
      <div className="flex flex-col h-full justify-between">
        <div className="flex h-full flex-col lg:flex-row gap-8 lg:gap-12 desktop:gap-16">
          <Sidebar />
          <section className="w-full">
            <div className="justify-around md:justify-end w-full md:w-auto mb-4 hidden lg:flex">
              <Button asChild variant="default" size="lg">
                <Link href="/import">
                  <Import className="mr-2 h-4 w-4" /> {t("Import")}
                </Link>
              </Button>
            </div>
            {children}
          </section>
        </div>
      </div>
    </>
  );
}
