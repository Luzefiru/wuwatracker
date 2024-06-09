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

  console.log(limitedCharacterStats);

  const fiveStarCharacters = [
    ...limitedCharacterStats?.fiveStarObjects,
    ...permanentCharacterStats?.fiveStarObjects,
    ...starterSelectorStats?.fiveStarObjects,
    ...starterStats?.fiveStarObjects,
  ];

  const fourStarCharacters = [
    ...limitedCharacterStats?.fourStarObjects,
    ...permanentCharacterStats?.fourStarObjects,
    ...starterSelectorStats?.fourStarObjects,
    ...starterStats?.fourStarObjects,
  ];

  const fiveStarWeapons = [
    ...permanentWeaponStats?.fiveStarObjects,
    ...limitedWeaponStats?.fiveStarObjects,
  ];

  const fourStarWeapons = [
    ...permanentWeaponStats?.fourStarObjects,
    ...limitedWeaponStats?.fourStarObjects,
  ];
  return (
    <Card className="flex items-center justify-center">
      <CardContent className="flex-row flex gap-2  py-6 md:flex-wrap">
        {Object.entries(fiveStarCharacterMetadata).map(([key, value]) => (
          <ItemAvatar
            key={key}
            qualityLevel={value.qualityLevel}
            name={key}
            type="character"
          />
        ))}
        {Object.entries(fourStarCharacterMetadata).map(([key, value]) => (
          <ItemAvatar
            key={key}
            qualityLevel={value.qualityLevel}
            name={key}
            type="character"
          />
        ))}
      </CardContent>
    </Card>
  );
}
