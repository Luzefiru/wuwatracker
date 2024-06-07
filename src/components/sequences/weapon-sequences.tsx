import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  fiveStarWeaponMetadata,
  fourStarWeaponMetadata,
} from "@/data/gachaObjects";
import { ItemAvatar } from "./item-avatar";

export default function WeaponSequences() {
  return (
    <Card className="flex items-center justify-center">
      <CardContent className="flex-row flex gap-2  py-6 md:flex-wrap">
        {Object.entries(fiveStarWeaponMetadata).map(([key, value]) => (
          <ItemAvatar key={key} qualityLevel={value.qualityLevel} name={key} />
        ))}
        {Object.entries(fourStarWeaponMetadata).map(([key, value]) => (
          <ItemAvatar key={key} qualityLevel={value.qualityLevel} name={key} />
        ))}
      </CardContent>
    </Card>
  );
}
