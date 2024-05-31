import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { BannerPityDisplayStats } from '@/types/BannerPity';
import Image from 'next/image';

interface Props {
  title: string;
  imgSrc: string;
  stats: BannerPityDisplayStats;
}

export default function ConveneCategoryCard({ title, imgSrc, stats }: Props) {
  return (
    <Card className="hover:bg-accent overflow-hidden">
      <div className="flex">
        <div className="relative w-24 h-24 rounded-xl self-center">
          <Image
            className="object-cover"
            src={imgSrc}
            width="404"
            height="560"
            alt="Wuwa Convene Tracker"
          />
        </div>
        <div className="w-full">
          <CardHeader>
            <CardTitle className="text-md desktop:text-xl">{title}</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col text-sm desktop:text-md">
            <div className="flex justify-between text-yellow-500 font-semibold">
              <p>5✦ Pity</p>
              <p>
                {stats.fiveStarCurrent}/{stats.fiveStarPity}
              </p>
            </div>
            <div className="flex justify-between text-purple-500 font-semibold">
              <p>4✦ Pity</p>
              <p>
                {stats.fourStarCurrent}/{stats.fourStarPity}
              </p>
            </div>
          </CardContent>
        </div>
      </div>
    </Card>
  );
}
