import Image from "next/image";
import { fiveStarObjects, fourStarObjects } from "@/data/gachaObjects";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Star } from "lucide-react";

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
  function getPullNumber(qualityLevel: number, fourStarCurrentPity: number) {
    const isFourStar = qualityLevel === 4 && fourStarCurrentPity === 0;

    if (isFourStar) {
      return pullNumber - previousFiveStarPullNumber;
    }
    return pullNumber - previousFiveStarPullNumber;
  }

  function getBadgeVariant(pullNumber: number) {
    if (pullNumber >= 65) {
      return "destructive";
    } else if (pullNumber >= 30) {
      return "warning";
    } else {
      return "success";
    }
  }

  const pullNumberToDisplay = getPullNumber(qualityLevel, fourStarCurrentPity);

  return (
    <>
      <div className="relative w-16 h-16 place-self-center">
        <div className="rounded-full w-16 h-16 bg-background overflow-hidden">
          <Image
            src={
              qualityLevel === 5
                ? /* @ts-ignore, TODO - find a way to index this without throwing a type error*/
                  fiveStarObjects[name].imgSrc
                : /* @ts-ignore, TODO - find a way to index this without throwing a type error*/
                  fourStarObjects[name].imgSrc
            }
            width="404"
            height="560"
            alt={name}
          />
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
