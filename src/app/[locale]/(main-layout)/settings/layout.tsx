import { unstable_setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params: { locale },
}: Readonly<{
  params: { locale: string };
}>) {
  const t = await getTranslations({ locale, namespace: "Metadata.Settings" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function SettingsLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  unstable_setRequestLocale(locale);
  return (
    <div className="flex mx-auto w-full flex-col gap-4 md:gap-8 max-w-screen-lg">
      {children}
    </div>
  );
}
