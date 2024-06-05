import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { createClient } from "@/lib/supabase/server";
import ConveneHistoryUrlSetting from "@/components/settings/convene-history-url-setting";

export default async function Settings() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return <>Pls login</>;
  }

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
