"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  fiveStarCharacterMetadata,
  fourStarCharacterMetadata,
} from "@/data/gachaObjects";
import { ItemAvatar } from "./item-avatar";
import { usePullHistory } from "@/contexts/pullHistoryContext";

export default function CharacterSequences() {
  const {
    limitedCharacterStats,
    permanentCharacterStats,
    starterStats,
    starterSelectorStats,
    limitedWeaponStats,
    permanentWeaponStats,
  } = usePullHistory();

  const fiveStars = [
    ...(limitedCharacterStats?.fiveStarObjects || []),
    ...(permanentCharacterStats?.fiveStarObjects || []),
    ...(starterSelectorStats?.fiveStarObjects || []),
    ...(starterStats?.fiveStarObjects || []),
    ...(permanentWeaponStats?.fiveStarObjects || []),
    ...(limitedWeaponStats?.fiveStarObjects || []),
  ];

  const fourStars = [
    ...(limitedCharacterStats?.fourStarObjects || []),
    ...(permanentCharacterStats?.fourStarObjects || []),
    ...(starterSelectorStats?.fourStarObjects || []),
    ...(starterStats?.fourStarObjects || []),
    ...(permanentWeaponStats?.fourStarObjects || []),
    ...(limitedWeaponStats?.fourStarObjects || []),
  ];

  return (
    <Card className="flex items-center justify-center bg-background/80">
      <CardContent className="flex-row flex gap-3 py-6 flex-wrap justify-center md:justify-start">
        {Object.entries(fiveStarCharacterMetadata).map(([key, value]) => (
          <ItemAvatar
            key={key}
            qualityLevel={value.qualityLevel}
            name={key}
            /* @ts-ignore*/
            numOfSequences={fiveStars.filter((c) => c.name === key).length}
          />
        ))}
        {Object.entries(fourStarCharacterMetadata).map(([key, value]) => (
          <ItemAvatar
            key={key}
            qualityLevel={value.qualityLevel}
            name={key}
            /* @ts-ignore*/
            numOfSequences={fourStars.filter((c) => c.name === key).length}
          />
        ))}
      </CardContent>
    </Card>
  );
}
