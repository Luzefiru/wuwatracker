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
  console.log(fiveStarObjects);
  const fourStarObjects = [
    ...(limitedCharacterStats?.fourStarObjects || []),
    ...(permanentCharacterStats?.fourStarObjects || []),
    ...(starterSelectorStats?.fourStarObjects || []),
    ...(starterStats?.fourStarObjects || []),
    ...(permanentWeaponStats?.fourStarObjects || []),
    ...(limitedWeaponStats?.fourStarObjects || []),
  ];

  return (
    <div className="flex flex-col h-full w-full gap-3 max-w-[1145px] justify-self-center">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center sm:text-start">
        <Tabs defaultValue="character">
          <div className="flex justify-between">
            <TabsContent value="character">
              <h2 className="scroll-m-20 text-2xl md:text-3xl font-semibold tracking-tight pb-2">
                Character Sequences
              </h2>
            </TabsContent>
            <TabsContent value="weapon">
              <h2 className="scroll-m-20 text-2xl md:text-3xl font-semibold tracking-tight pb-2">
                Weapon Sequences
              </h2>
            </TabsContent>
            <TabsList>
              <TabsTrigger value="character">Character</TabsTrigger>
              <TabsTrigger value="weapon">Weapon</TabsTrigger>
            </TabsList>
          </div>
          <p className="text-muted-foreground pb-1">
            Note: This only includes sequences earned within your convene
            history.
          </p>
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
