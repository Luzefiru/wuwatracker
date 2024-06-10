import ConveneHistoryUrlSetting from "@/components/settings/convene-history-url-setting";
import CloudSyncSetting from "@/components/settings/cloud-sync-setting";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

export default function Settings({
  params: { locale },
}: Readonly<{
  params: { locale: string };
}>) {
  unstable_setRequestLocale(locale);
  const t = useTranslations("Settings");

  return (
    <>
      <div>
        <h1 className="text-3xl font-semibold pb-2">{t("Settings")}</h1>
        <p className="text-muted-foreground">
          {t(
            "Edit your preferences for global statistics and synchronization here",
          )}
          .
        </p>
      </div>
      <div className="grid items-start gap-6">
        <div className="grid gap-6">
          <ConveneHistoryUrlSetting />
          <CloudSyncSetting />
        </div>
      </div>
    </>
  );
}
