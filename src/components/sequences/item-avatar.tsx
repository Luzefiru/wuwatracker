"use client";

import Image from "next/image";
import { fiveStarObjects, fourStarObjects } from "@/data/gachaObjects";
import { Sparkles } from "lucide-react";

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
    <>
      <div className="relative w-16 h-16 place-self-center">
        <div className="rounded-full w-16 h-16 bg-background overflow-hidden">
          <Image src={imgSrc} width="404" height="560" alt={name} />
        </div>

        {qualityLevel === 5 && (
          <Sparkles className="h-[1rem] w-[1rem] rotate-0 scale-100 text-xl transition-all absolute text-yellow-400 fill-yellow-400 left-0 top-0 aspect-square"></Sparkles>
        )}
      </div>
    </>
  );
}
