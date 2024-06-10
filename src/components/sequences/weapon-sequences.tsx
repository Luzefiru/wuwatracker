import { Card, CardContent } from "@/components/ui/card";

import {
  fiveStarWeaponMetadata,
  fourStarWeaponMetadata,
} from "@/data/gachaObjects";
import { ItemAvatar } from "./item-avatar";

import { BannerStats } from "@/types/BannerStats";

interface Props {
  fiveStars: Array<BannerStats>;
  fourStars: Array<BannerStats>;
}

export default function WeaponSequences({ fiveStars, fourStars }: Props) {
  return (
    <Card className="flex items-center justify-center">
      <CardContent className="flex-row flex gap-2  py-6 md:flex-wrap">
        {Object.entries(fiveStarWeaponMetadata).map(([key, value]) => (
          <ItemAvatar
            key={key}
            qualityLevel={value.qualityLevel}
            name={key}
            /* @ts-ignore*/
            numOfSequences={fiveStars.filter((w) => w.name === key).length}
          />
        ))}
        {Object.entries(fourStarWeaponMetadata).map(([key, value]) => (
          <ItemAvatar
            key={key}
            qualityLevel={value.qualityLevel}
            name={key}
            /* @ts-ignore*/
            numOfSequences={fourStars.filter((w) => w.name === key).length}
          />
        ))}
      </CardContent>
    </Card>
  );
}
