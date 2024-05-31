'use client';

import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { BannerPityDisplayStats } from '@/types/BannerPity';
import { useConveneHistory } from '@/hooks/useConveneHistory';
import Image from 'next/image';
import { useState, useEffect } from 'react';

interface Props {
  title: string;
  imgSrc: string;
  cardPoolType: number;
  fiveStarPity: number;
  fourStarPity: number;
}

export default function ConveneCategoryCard({
  title,
  imgSrc,
  cardPoolType,
  fiveStarPity,
  fourStarPity,
}: Props) {
  const { getCardPoolTypePity } = useConveneHistory();

  const [stats, setStats] = useState<BannerPityDisplayStats | null>(null);

  useEffect(() => {
    const fetchPityStats = async () => {
      const fetchedPityStats = await getCardPoolTypePity(cardPoolType, {
        fiveStarPity,
        fourStarPity,
      });
      setStats(fetchedPityStats);
    };
    fetchPityStats();
  }, [getCardPoolTypePity, cardPoolType, fiveStarPity, fourStarPity]);

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
            <CardTitle className="text-md sm:text-lg pb-2">{title}</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col text-sm desktop:text-md">
            <div className="flex justify-between text-yellow-500 font-semibold">
              <p>5✦ Pity</p>
              <p>
                {stats ? stats.fiveStarCurrent : 0}/
                {stats ? stats.fiveStarPity : 80}
              </p>
            </div>
            <div className="flex justify-between text-purple-500 font-semibold">
              <p>4✦ Pity</p>
              <p>
                {stats ? stats.fourStarCurrent : 0}/
                {stats ? stats.fourStarPity : 10}
              </p>
            </div>
          </CardContent>
        </div>
      </div>
    </Card>
  );
}
