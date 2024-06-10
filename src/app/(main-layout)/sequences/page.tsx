"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CharacterSequences from "@/components/sequences/character-sequences";
import WeaponSequences from "@/components/sequences/weapon-sequences";
import { usePullHistory } from "@/contexts/pullHistoryContext";

export default function Sequences() {
  const {
    limitedCharacterStats,
    permanentCharacterStats,
    starterStats,
    starterSelectorStats,
    limitedWeaponStats,
    permanentWeaponStats,
  } = usePullHistory();

  const fiveStarObjects = [
    ...(limitedCharacterStats?.fiveStarObjects || []),
    ...(permanentCharacterStats?.fiveStarObjects || []),
    ...(starterSelectorStats?.fiveStarObjects || []),
    ...(starterStats?.fiveStarObjects || []),
    ...(permanentWeaponStats?.fiveStarObjects || []),
    ...(limitedWeaponStats?.fiveStarObjects || []),
  ];

  const fourStarObjects = [
    ...(limitedCharacterStats?.fourStarObjects || []),
    ...(permanentCharacterStats?.fourStarObjects || []),
    ...(starterSelectorStats?.fourStarObjects || []),
    ...(starterStats?.fourStarObjects || []),
    ...(permanentWeaponStats?.fourStarObjects || []),
    ...(limitedWeaponStats?.fourStarObjects || []),
  ];

  return (
    <div className="flex flex-col h-full w-full gap-3 max-w-[1160px] justify-self-center">
      <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-4 text-center sm:text-start">
        <Tabs defaultValue="character">
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-start pb-1">
            <div className="flex flex-col gap-2 justify-between pb-2 md:pr-4">
              <TabsContent value="character">
                <h2 className="scroll-m-20 text-2xl md:text-3xl font-semibold tracking-tight">
                  Character Sequences
                </h2>
              </TabsContent>
              <TabsContent value="weapon">
                <h2 className="scroll-m-20 text-2xl md:text-3xl font-semibold tracking-tight">
                  Weapon Sequences
                </h2>
              </TabsContent>
              <p className="text-muted-foreground pb-1">
                Note: This only includes sequences earned within your convene
                history.
              </p>
            </div>
            <TabsList className="w-fit self-center md:self-auto justify-self-center dark:bg-accent bg-slate-200/30">
              <TabsTrigger value="character">Character</TabsTrigger>
              <TabsTrigger value="weapon">Weapon</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="character">
            <CharacterSequences
              /* @ts-ignore*/
              fiveStars={fiveStarObjects}
              /* @ts-ignore*/
              fourStars={fourStarObjects}
            />
          </TabsContent>
          <TabsContent value="weapon">
            <WeaponSequences
              /* @ts-ignore*/
              fiveStars={fiveStarObjects}
              /* @ts-ignore*/
              fourStars={fourStarObjects}
            />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
