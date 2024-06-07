"use client";

import Image from "next/image";
import { fiveStarObjects, fourStarObjects } from "@/data/gachaObjects";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface Props {
  name: string;
  qualityLevel: number;
}

export function ItemAvatar({ name, qualityLevel }: Props) {
  const imgSrc =
    qualityLevel === 5
      ? /* @ts-ignore, TODO - find a way to index this without throwing a type error*/
        fiveStarObjects[name]?.imgSrc ?? "/icons/unknown-five-star.png"
      : /* @ts-ignore, TODO - find a way to index this without throwing a type error*/
        fourStarObjects[name]?.imgSrc ?? "/icons/unknown-four-star.png";

  return (
    <Card>
      <CardContent>
        <div className="relative w-20 h-20 place-self-center">
          <Image src={imgSrc} width="404" height="560" alt={name} />
        </div>
      </CardContent>
    </Card>
  );
}
