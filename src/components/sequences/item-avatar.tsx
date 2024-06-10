"use client";

import Image from "next/image";
import { fiveStarObjects, fourStarObjects } from "@/data/gachaObjects";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { usePullHistory } from "@/contexts/pullHistoryContext";

interface Props {
  name: string;
  qualityLevel: number;
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
    <Card
      className={`flex justify-between flex-col mb-1 border-none dark:bg-background/80 relative hover:bg-accent/40 transition-all duration-75`}
    >
      <CardContent className="py-2 h-fit relative px-0 flex items-center justify-center pb-0">
        <div className="w-24 place-self-center h-fit">
          <Image src={imgSrc} width="404" height="560" alt={name} />
        </div>
        {numOfSequences > 0 && (
          <Badge
            variant={qualityLevel === 5 ? "fiveStar" : "fourStar"}
            className="absolute w-7 -right-1 -top-1 aspect-square flex items-center justify-center"
          >
            <span className="text-white">{`S${numOfSequences - 1}`}</span>
          </Badge>
        )}
      </CardContent>
      <CardFooter className="pb-2 h-15 w-full flex flex-col items-center justify-center z-100 ">
        <p className="text-lg text-yellow-500">
          {qualityLevel === 5 ? "✦✦✦✦✦" : "✦✦✦✦"}
        </p>
        <p className="w-20 text-center truncate">{name}</p>
        <div
          className={`rounded-lg absolute inset-x-0 bottom-0 h-[90%] bg-gradient-to-t  via-transparent to-transparent z-10 ${qualityLevel === 5 ? "from-yellow-400/30" : "from-purple-400/30"}`}
        ></div>
      </CardFooter>
    </Card>
  );
}
