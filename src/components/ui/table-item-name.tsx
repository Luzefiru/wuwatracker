import { fiveStarObjects, fourStarObjects } from "@/data/gachaObjects";
import Image from "next/image";

interface Props {
  qualityLevel: number;
  name: string;
}

export function TableItemName({ qualityLevel, name }: Props) {
  const imgSrc =
    qualityLevel === 5
      ? /* @ts-ignore, TODO - find a way to index this without throwing a type error*/
        fiveStarObjects[name]?.imgSrc ?? "/icons/unknown-five-star.png"
      : /* @ts-ignore, TODO - find a way to index this without throwing a type error*/
        fourStarObjects[name]?.imgSrc ?? "/icons/unknown-four-star.png";

  return (
    <div className="flex items-center gap-3">
      <Image src={imgSrc} width="25" height="25" alt={name} />
      <p
        className={
          qualityLevel === 4
            ? "text-purple-600 font-semibold"
            : "text-yellow-600 font-semibold"
        }
      >
        {name}
      </p>
    </div>
  );
}
