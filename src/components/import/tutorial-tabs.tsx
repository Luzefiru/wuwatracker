import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PCImportTutorial } from "@/components/import/pc-tutorial";
import { AndroidImportTutorial } from "./android-tutorial";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { TriangleAlert } from "lucide-react";
import Link from "next/link";

export default function TutorialTabs() {
  return (
    <Tabs defaultValue="pc" className="w-full">
      <TabsList className="w-full flex md:my-4 h-11">
        <TabsTrigger className="flex-1 h-9" value="pc">
          PC
        </TabsTrigger>
        <TabsTrigger className="flex-1 h-9" value="android">
          Android
        </TabsTrigger>
      </TabsList>
      <TabsContent value="pc">
        <PCImportTutorial />
      </TabsContent>
      <TabsContent value="android">
        {" "}
        <Alert variant="destructive" className="bg-background md:mb-8">
          <TriangleAlert className="h-4 w-4" />
          <AlertTitle>Disclaimer</AlertTitle>
          <AlertDescription>
            This method is not yet thoroughly tested, so use this at your own
            risk. Please join our{" "}
            <Link
              className="text-foreground hover:text-muted-foreground"
              href="https://discord.gg/mADnEXwZGT"
            >
              Discord Server
            </Link>{" "}
            to ask for any help!
          </AlertDescription>
        </Alert>
        <AndroidImportTutorial />
      </TabsContent>
    </Tabs>
  );
}
