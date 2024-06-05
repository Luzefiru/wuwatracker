"use client";

import Image from "next/image";
import * as React from "react";
import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { BannerStats } from "@/types/BannerStats";
import { ConveneAvatar } from "./convene-avatar";
import { AvatarFilter as Filtertype } from "@/types/AvatarFilter";
import AvatarFilter from "./avatar-filter";
import { PullHistory } from "./pull-history";

interface Props {
  stats: BannerStats | null;
  title: string;
  description: string;
  bgImgSrc: string;
}

export function BannerStatsCard({
  stats,
  title,
  description,
  bgImgSrc,
}: Props) {
  const [filter, setFilter] = useState<Array<Filtertype>>([
    Filtertype.FIVE_STARS,
    Filtertype.FOUR_STARS,
  ]);

  function filterAvatars() {
    if (stats?.fiveStarObjects.length || stats?.fourStarObjects.length) {
      if (
        filter.includes(Filtertype.FIVE_STARS) &&
        filter.includes(Filtertype.FOUR_STARS)
      ) {
        return [...stats?.fourStarObjects, ...stats?.fiveStarObjects];
      } else if (filter.includes(Filtertype.FIVE_STARS)) {
        return stats?.fiveStarObjects;
      } else if (filter.includes(Filtertype.FOUR_STARS)) {
        return stats?.fourStarObjects;
      }
    }
  }

  function determineFilter() {
    if (stats?.fiveStarObjects.length && stats?.fourStarObjects.length) {
      return true;
    } else if (
      stats?.fiveStarObjects.length &&
      filter.includes(Filtertype.FIVE_STARS)
    ) {
      return true;
    } else if (
      stats?.fourStarObjects.length &&
      filter.includes(Filtertype.FOUR_STARS)
    ) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <div className="flex w-full flex-col gap-8">
      <Card
        className="bg-background/80 backdrop-blur-sm w-full"
        style={{ backgroundImage: `url${bgImgSrc}` }}
      >
        <div className="w-full">
          <CardHeader className="text-center md:text-start">
            <CardTitle>{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col mt-3 gap-3">
            <div className="py-4 px-3 flex justify-between bg-accent dark:opacity-80 rounded-lg">
              <h1 className="text-lg">Astrites Spent</h1>
              <div className="flex gap-1">
                <h1 className="text-lg">{stats ? stats.totalAstrites : 0}</h1>
                <Image
                  src={"/icons/astrite.png"}
                  width={30}
                  height={8}
                  alt="Astrites"
                />
              </div>
            </div>
            <div className="py-4 px-3 flex justify-between bg-accent dark:opacity-80 rounded-lg">
              <h1 className="text-lg">Total Convenes</h1>
              <div className="flex gap-1">
                <h1 className="text-lg">{stats ? stats.totalPulls : 0}</h1>
                <Image
                  src={
                    description.includes("Event")
                      ? "/icons/radiant-tide.webp"
                      : "/icons/lustrous-tide.webp"
                  }
                  width={25}
                  height={7}
                  alt="Special Convene"
                />
              </div>
            </div>
            <div className="py-4 px-3 flex justify-between bg-accent dark:opacity-80 rounded-lg">
              <h1 className="text-lg">5✦ Pulls</h1>
              <div className="flex">
                <h1 className="text-lg">{stats ? stats.fiveStars : 0}</h1>
              </div>
            </div>
            <div className="py-4 px-3 flex justify-between bg-accent dark:opacity-80 rounded-lg">
              <h1 className="text-lg">4✦ Pulls</h1>
              <div className="flex">
                <h1 className="text-lg">{stats ? stats.fourStars : 0}</h1>
              </div>
            </div>
          </CardContent>
        </div>
      </Card>
      <Card className="bg-background/80 backdrop-blur-sm w-full">
        <div className="w-full">
          <CardHeader className="text-center md:text-start flex flex-col sm:flex-row justify-between items-center ">
            <div className="flex flex-col sm:flex-row items-center gap-3 flex-wrap">
              {(filter.includes(Filtertype.FIVE_STARS) &&
                filter.includes(Filtertype.FOUR_STARS)) ||
              filter.length === 0 ? (
                <CardTitle>
                  Recent <span className="text-yellow-500">5✦</span> and{" "}
                  <span className="text-purple-500">4✦</span> Convenes
                </CardTitle>
              ) : filter.includes(Filtertype.FIVE_STARS) ? (
                <CardTitle>
                  Recent <span className="text-yellow-500">5✦</span> Convenes
                </CardTitle>
              ) : (
                <CardTitle>
                  Recent <span className="text-purple-500">4✦</span> Convenes
                </CardTitle>
              )}
              <p className="text-xs text-muted-foreground opacity-60 mb-1 md:mb-0">
                wuwatracker.tech
              </p>
            </div>
            <AvatarFilter avatarFilter={filter} setAvatarFilter={setFilter} />
          </CardHeader>
          <CardContent className="grid md:flex md:flex-wrap gap-4 grid-auto-fit-[4rem] pt-6">
            {filter.length !== 0 && determineFilter() ? (
              filterAvatars()
                ?.sort((a, b) => a.time.getTime() - b.time.getTime())
                .reverse()
                .map((o) => {
                  return (
                    <ConveneAvatar key={String(o.time) + o.pullNumber} {...o} />
                  );
                })
            ) : (
              <p className="text-muted-foreground text-sm">No records found.</p>
            )}
          </CardContent>
        </div>
      </Card>
      <PullHistory stats={stats} />
    </div>
  );
}
