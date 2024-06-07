import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  fiveStarCharacterMetadata,
  fourStarCharacterMetadata,
} from "@/data/gachaObjects";
import { ItemAvatar } from "./item-avatar";

export default function CharacterSequences() {
  return (
    <Card className="flex items-center justify-center">
      <CardContent className="flex-row flex gap-2  py-6 md:flex-wrap">
        {Object.entries(fiveStarCharacterMetadata).map(([key, value]) => (
          <ItemAvatar key={key} qualityLevel={value.qualityLevel} name={key} />
        ))}
        {Object.entries(fourStarCharacterMetadata).map(([key, value]) => (
          <ItemAvatar key={key} qualityLevel={value.qualityLevel} name={key} />
        ))}
      </CardContent>
    </Card>
  );
}
