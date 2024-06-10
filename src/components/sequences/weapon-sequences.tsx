import { Card, CardContent } from "@/components/ui/card";

import {
  fiveStarWeaponMetadata,
  fourStarWeaponMetadata,
} from "@/data/gachaObjects";
import { ItemAvatar } from "./item-avatar";
import { usePullHistory } from "@/contexts/pullHistoryContext";

export default function WeaponSequences() {
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
    <Card className="flex items-center justify-center">
      <CardContent className="flex-row flex gap-2  py-6 md:flex-wrap">
        {Object.entries(fiveStarWeaponMetadata).map(([key, value]) => (
          <ItemAvatar
            key={key}
            qualityLevel={value.qualityLevel}
            name={key}
            numOfSequences={
              fiveStarObjects.filter((w) => w.name === key).length
            }
          />
        ))}
        {Object.entries(fourStarWeaponMetadata).map(([key, value]) => (
          <ItemAvatar
            key={key}
            qualityLevel={value.qualityLevel}
            name={key}
            numOfSequences={
              fourStarObjects.filter((w) => w.name === key).length
            }
          />
        ))}
      </CardContent>
    </Card>
  );
}
