'use client';

import { useConveneHistory } from '@/hooks/useConveneHistory';

import Image from 'next/image';
import * as React from 'react';
import { useState, useEffect } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card';
import { BannerStats } from '@/types/BannerStats';

interface Props {
  title: string;
  description: string;
  pullCost: number;
  cardPoolType: number;
}

export function BannerStatsCard({
  title,
  description,
  pullCost,
  cardPoolType,
}: Props) {
  const { getCardPoolTypeStatistics } = useConveneHistory();

  const [stats, setStats] = useState<BannerStats | null>(null);

  useEffect(() => {
    const fetchPityStats = async () => {
      const fetchedPityStats = await getCardPoolTypeStatistics(
        cardPoolType,
        pullCost
      );
      setStats(fetchedPityStats);
    };
    fetchPityStats();
  }, [cardPoolType, getCardPoolTypeStatistics, pullCost]);

  return (
    <>
      <div className="flex w-full flex-col gap-8">
        <div className="flex w-full flex-col desktop:flex-row">
          <Card className="dark:bg-accent bg-background w-full">
            <div className="w-full">
              <CardHeader className="text-center md:text-start">
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col mt-3 gap-3">
                <div className="py-4 px-3 flex justify-between bg-accent dark:bg-background rounded-lg">
                  <h1 className="text-lg">Astrites Spent</h1>
                  <div className="flex gap-1">
                    <h1 className="text-lg">
                      {stats ? stats.totalAstrites : 0}
                    </h1>
                    <Image
                      src={'/icons/astrites.png'}
                      width={30}
                      height={8}
                      alt="Astrites"
                    />
                  </div>
                </div>
                <div className="py-4 px-3 flex justify-between bg-accent dark:bg-background rounded-lg">
                  <h1 className="text-lg">Total Convenes</h1>
                  <div className="flex gap-1">
                    <h1 className="text-lg">{stats ? stats.totalPulls : 0}</h1>
                    <Image
                      src={'/icons/special-convene.png'}
                      width={30}
                      height={8}
                      alt="Special Convene"
                    />
                  </div>
                </div>
                <div className="py-4 px-3 flex justify-between bg-accent dark:bg-background rounded-lg">
                  <h1 className="text-lg">5✦ Pulls</h1>
                  <div className="flex">
                    <h1 className="text-lg">{stats ? stats.fiveStars : 0}</h1>
                  </div>
                </div>
                <div className="py-4 px-3 flex justify-between bg-accent dark:bg-background rounded-lg">
                  <h1 className="text-lg">4✦ Pulls</h1>
                  <div className="flex">
                    <h1 className="text-lg">{stats ? stats.fourStars : 0}</h1>
                  </div>
                </div>
              </CardContent>
            </div>
          </Card>
        </div>
        <Card className="dark:bg-accent bg-background w-full">
          <div className="w-full">
            <CardHeader className="text-center md:text-start">
              <CardTitle>
                Recent <span className="text-yellow-500">5✦</span> Convenes
              </CardTitle>
            </CardHeader>
            <CardContent className="grid md:flex md:flex-wrap gap-4 grid-auto-fit-[4rem] pt-6">
              <div className="bg-background w-16 h-16 rounded-full place-self-center"></div>
              <div className="bg-background w-16 h-16 rounded-full place-self-center"></div>
              <div className="bg-background w-16 h-16 rounded-full place-self-center"></div>
              <div className="bg-background w-16 h-16 rounded-full place-self-center"></div>
              <div className="bg-background w-16 h-16 rounded-full place-self-center"></div>
            </CardContent>
          </div>
        </Card>
      </div>
    </>
  );
}
