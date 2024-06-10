import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CharacterSequences from "@/components/sequences/character-sequences";
import WeaponSequences from "@/components/sequences/weapon-sequences";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

export default function Sequences({
  params: { locale },
}: Readonly<{
  params: { locale: string };
}>) {
  unstable_setRequestLocale(locale);
  const t = useTranslations("Sequences");

  return (
    <div className="flex flex-col h-full w-full gap-3 max-w-[1160px] justify-self-center">
      <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-4 text-center sm:text-start">
        <Tabs defaultValue="character">
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-start pb-1">
            <div className="flex flex-col gap-2 justify-between pb-2 md:pr-4">
              <TabsContent value="character">
                <h2 className="scroll-m-20 text-2xl md:text-3xl font-semibold tracking-tight">
                  {t("Character")} {t("Sequences")}
                </h2>
              </TabsContent>
              <TabsContent value="weapon">
                <h2 className="scroll-m-20 text-2xl md:text-3xl font-semibold tracking-tight">
                  {t("Weapon")} {t("Sequences")}
                </h2>
              </TabsContent>
              <p className="text-muted-foreground pb-1">
                {t(
                  "Note: This only includes sequences earned within your convene history",
                )}
                .
              </p>
            </div>
            <TabsList className="w-fit self-center md:self-auto justify-self-center dark:bg-accent bg-slate-200/30">
              <TabsTrigger value="character">{t("Character")}</TabsTrigger>
              <TabsTrigger value="weapon">{t("Weapon")}</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="character">
            <CharacterSequences />
          </TabsContent>
          <TabsContent value="weapon">
            <WeaponSequences />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
