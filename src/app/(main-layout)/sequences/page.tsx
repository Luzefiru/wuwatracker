"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import getFirstConveneBannerHref from "@/lib/getFirstConveneBannerHref";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
        <Tabs defaultValue="account" className="w-full">
          <div className="flex justify-between">
            <TabsContent value="character">
              <h2 className="scroll-m-20 text-2xl md:text-3xl font-semibold tracking-tight pb-2">
                Sequences
              </h2>
            </TabsContent>
            <TabsContent value="weapon">
              <h2 className="scroll-m-20 text-2xl md:text-3xl font-semibold tracking-tight pb-2">
                Sequences
              </h2>
            </TabsContent>
            <TabsList>
              <TabsTrigger value="character">Character</TabsTrigger>
              <TabsTrigger value="weapon">Weapon</TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value="character">
            Make changes to your account here.
          </TabsContent>
          <TabsContent value="weapon">Change your password here.</TabsContent>
        </Tabs>
        <div className="flex justify-around md:justify-end w-full md:w-auto"></div>
      </div>
    </div>
  );
}
