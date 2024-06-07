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
    <Card>
      <CardContent>
        {Object.keys(fiveStarCharacterMetadata).map((c) => (
          <ItemAvatar key={c} qualityLevel={c.qualityLevel} name={c.name} />
        ))}
      </CardContent>
    </Card>
  );
}
