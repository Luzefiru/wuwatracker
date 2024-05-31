import * as React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { BannerStatsCard } from './banner-stats-card';

export function ConveneStats() {
  return (
    <div className="flex w-full flex-col gap-8">
      <div className="flex w-full flex-col desktop:flex-row">
        <BannerStatsCard
          title="Character Event Convene"
          description="Lifetime Statistics"
          pullCost={160}
          cardPoolType={1}
        />
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
  );
}
