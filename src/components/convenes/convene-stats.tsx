import Image from 'next/image';
import * as React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card';
import { CharacterLifetimeStats } from './character-lifetime-stats';
// import { WeaponLifetimeStats } from './weapon-lifetime-statistics';

export function ConveneStats() {
  return (
    <div className="flex w-full flex-col gap-8">
      <div className="flex w-full flex-col desktop:flex-row">
        <Card className="dark:bg-accent bg-background w-full">
          <div className="w-full">
            <CardHeader className="text-center md:text-start">
              <CardTitle>Character Banner Statistics</CardTitle>
              <CardDescription>Account Lifetime Statistics</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col mt-3 gap-3">
              <CharacterLifetimeStats />
            </CardContent>
          </div>
        </Card>
        {/* <Card className=" mt-5 dark:bg-accent bg-background desktop:w-[50%] w-full">
          <div className="flex">
            <div className="w-full">
              <CardHeader>
                <CardTitle>Weapon Banner Statistics</CardTitle>
                <CardDescription>Account Lifetime Statistics</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col mt-3 gap-2">
                <WeaponLifetimeStats />
              </CardContent>
            </div>
          </div>
        </Card> */}
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
