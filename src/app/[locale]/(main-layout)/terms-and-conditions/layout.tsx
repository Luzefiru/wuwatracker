import { unstable_setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params: { locale },
}: Readonly<{
  params: { locale: string };
}>) {
  const t = await getTranslations({
    locale,
    namespace: "Metadata.Terms & Conditions",
  });

  return {
    title: t("title"),
    description: t("description"),
  };
}
export default function TermsAndConditionsLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  unstable_setRequestLocale(locale);
  return <>{children}</>;
}
