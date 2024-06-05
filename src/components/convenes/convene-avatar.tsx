"use client";

import Image from "next/image";
import { fiveStarObjects, fourStarObjects } from "@/data/gachaObjects";
import { Badge } from "@/components/ui/badge";
import { Sparkles } from "lucide-react";
import getPullNumber from "@/lib/getPullNumber";

interface Props {
  name: string;
  pullNumber: number;
  qualityLevel: number;
  fiveStarCurrentPity: number;
  fourStarCurrentPity: number;
  previousFiveStarPullNumber: number;
  previousFourStarPullNumber: number;
}

export function ConveneAvatar({
  name,
  pullNumber,
  qualityLevel,
  fourStarCurrentPity,
  previousFiveStarPullNumber,
  previousFourStarPullNumber,
}: Props) {
  function getBadgeVariant(pullNumber: number) {
    const isFourStar = qualityLevel === 4 && fourStarCurrentPity === 0;

    if (isFourStar) {
      if (pullNumber >= 8) {
        return "destructive";
      } else if (pullNumber >= 4) {
        return "warning";
      } else {
        return "success";
      }
    } else {
      if (pullNumber >= 65) {
        return "destructive";
      } else if (pullNumber >= 40) {
        return "warning";
      } else {
        return "success";
      }
    }
  }

  const pullNumberToDisplay = getPullNumber(
    qualityLevel,
    fourStarCurrentPity,
    pullNumber,
    previousFourStarPullNumber,
    previousFiveStarPullNumber,
  );

  const imgSrc =
    qualityLevel === 5
      ? /* @ts-ignore, TODO - find a way to index this without throwing a type error*/
        fiveStarObjects[name]?.imgSrc ?? "/icons/unknown-five-star.png"
      : /* @ts-ignore, TODO - find a way to index this without throwing a type error*/
        fourStarObjects[name]?.imgSrc ?? "/icons/unknown-four-star.png";

  return (
    <>
      <div className="relative w-16 h-16 place-self-center">
        <div className="rounded-full w-16 h-16 bg-background overflow-hidden">
          <Image src={imgSrc} width="404" height="560" alt={name} />
        </div>
        <Badge
          className="absolute w-7 -right-1 -bottom-1 aspect-square flex items-center justify-center"
          variant={getBadgeVariant(pullNumberToDisplay)}
        >
          <span>{pullNumberToDisplay}</span>
        </Badge>
        {qualityLevel === 5 && (
          <Sparkles className="h-[1rem] w-[1rem] rotate-0 scale-100 text-xl transition-all absolute text-yellow-400 fill-yellow-400 left-0 top-0 aspect-square"></Sparkles>
        )}
      </div>
    </>
  );
}
