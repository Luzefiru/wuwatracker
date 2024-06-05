import ConveneHistoryUrlSetting from "@/components/settings/convene-history-url-setting";

export default async function Settings() {
  return (
    <>
      <div>
        <h1 className="text-3xl font-semibold pb-2">Settings</h1>
        <p className="text-muted-foreground">
          Edit your preferences for global statistics and synchronization here.
        </p>
      </div>
      <div className="grid items-start gap-6">
        <div className="grid gap-6">
          <ConveneHistoryUrlSetting />
        </div>
      </div>
    </>
  );
}
