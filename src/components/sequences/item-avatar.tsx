"use client";

import Image from "next/image";
import { fiveStarObjects, fourStarObjects } from "@/data/gachaObjects";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { usePullHistory } from "@/contexts/pullHistoryContext";

interface Props {
  name: string;
  qualityLevel: number;
  type: string;
  numOfSequences: number;
}

export function ItemAvatar({ name, qualityLevel, numOfSequences }: Props) {
  function getNumberOfSequences(name: string) {
    const initialSequences = -1;
  }
  const imgSrc =
    qualityLevel === 5
      ? /* @ts-ignore, TODO - find a way to index this without throwing a type error*/
        fiveStarObjects[name]?.imgSrc ?? "/icons/unknown-five-star.png"
      : /* @ts-ignore, TODO - find a way to index this without throwing a type error*/
        fourStarObjects[name]?.imgSrc ?? "/icons/unknown-four-star.png";

  return (
    <Card className="flex justify-between flex-col mb-1 ">
      <CardContent className="py-2 h-fit relative">
        <div className="w-20 place-self-center h-fit">
          <Image src={imgSrc} width="404" height="560" alt={name} />
        </div>
        <Badge
          variant={qualityLevel === 5 ? "fiveStar" : "fourStar"}
          className="absolute w-7 -right-1 -top-1 aspect-square flex items-center justify-center"
        >
          <span className="text-white">S{numOfSequences}</span>
        </Badge>
      </CardContent>
      <CardFooter className="pb-2 h-15 w-full flex items-center justify-center">
        <p className="w-20 text-center truncate">{name}</p>
      </CardFooter>
    </Card>
  );
}
