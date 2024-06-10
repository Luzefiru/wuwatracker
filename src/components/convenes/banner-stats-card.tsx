"use client";

import Image from "next/image";
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
import { AvatarFilter as FilterType } from "@/types/AvatarFilter";
import AvatarFilter from "./avatar-filter";
import { PullHistory } from "./pull-history";
import { usePathname } from "next/navigation";
import { usePullHistory } from "@/contexts/pullHistoryContext";
import { BannerTypeSlugEnum } from "@/types/BannerTypeSlugEnum";
import { useTranslations } from "next-intl";

interface Props {
  title: string;
  description: string;
}

export function BannerStatsCard({ title, description }: Props) {
  const t = useTranslations("Convene.BannerStatsCard");
  const tt = useTranslations("GachaBanners");
  const pathname = usePathname();
  const pathSegment = pathname.split("/").pop() as BannerTypeSlugEnum; // For example, if pathname is "/convene/starter", this will be "starter"
  const [_, setIsLoading] = useState(true);

  const [filter, setFilter] = useState<Array<FilterType>>([
    FilterType.FIVE_STARS,
    FilterType.FOUR_STARS,
  ]);

  const [stats, setStats] = useState<BannerStats | null>(null);
  const {
    limitedCharacterStats,
    limitedWeaponStats,
    permanentCharacterStats,
    permanentWeaponStats,
    starterStats,
    starterSelectorStats,
  } = usePullHistory();

  useEffect(() => {
    setIsLoading(false);

    const pathToStatsMap = {
      "limited-character": limitedCharacterStats,
      "limited-weapon": limitedWeaponStats,
      "permanent-character": permanentCharacterStats,
      "permanent-weapon": permanentWeaponStats,
      "starter-selector": starterSelectorStats,
      starter: starterStats,
    } as const;

    setStats(pathToStatsMap[pathSegment as BannerTypeSlugEnum]);
  }, [
    limitedCharacterStats,
    limitedWeaponStats,
    permanentCharacterStats,
    permanentWeaponStats,
    starterSelectorStats,
    starterStats,
    pathname,
    pathSegment,
  ]);

  function filterAvatars() {
    if (stats?.fiveStarObjects.length || stats?.fourStarObjects.length) {
      if (
        filter.includes(FilterType.FIVE_STARS) &&
        filter.includes(FilterType.FOUR_STARS)
      ) {
        return [...stats?.fourStarObjects, ...stats?.fiveStarObjects];
      } else if (filter.includes(FilterType.FIVE_STARS)) {
        return stats?.fiveStarObjects;
      } else if (filter.includes(FilterType.FOUR_STARS)) {
        return stats?.fourStarObjects;
      }
    }
  }

  function determineFilter() {
    if (stats?.fiveStarObjects.length && stats?.fourStarObjects.length) {
      return true;
    } else if (
      stats?.fiveStarObjects.length &&
      filter.includes(FilterType.FIVE_STARS)
    ) {
      return true;
    } else if (
      stats?.fourStarObjects.length &&
      filter.includes(FilterType.FOUR_STARS)
    ) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <div className="flex w-full flex-col gap-8">
      <Card className="bg-background/80 backdrop-blur-sm w-full">
        <div className="w-full">
          <CardHeader className="text-center md:text-start">
            <CardTitle>{tt(title)}</CardTitle>
            <CardDescription>{tt(description)}</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col mt-3 gap-3">
            <div className="py-4 px-3 flex justify-between bg-accent dark:opacity-80 rounded-lg">
              <h4 className="text-lg">{t("Astrites Spent")}</h4>
              <div className="flex gap-1">
                <span className="text-lg">
                  {stats ? stats.totalAstrites : 0}
                </span>
                <Image
                  src={"/icons/astrite.png"}
                  width={30}
                  height={8}
                  alt="Astrites"
                />
              </div>
            </div>
            <div className="py-4 px-3 flex justify-between bg-accent dark:opacity-80 rounded-lg">
              <h4 className="text-lg">{t("Total Convenes")}</h4>
              <div className="flex gap-1">
                <span className="text-lg">{stats ? stats.totalPulls : 0}</span>
                <Image
                  src={
                    description.includes("Featured")
                      ? "/icons/radiant-tide.webp"
                      : "/icons/lustrous-tide.webp"
                  }
                  width={25}
                  height={7}
                  alt="Convene Tide"
                />
              </div>
            </div>
            <div className="py-4 px-3 flex justify-between bg-accent dark:opacity-80 rounded-lg">
              <h4 className="text-lg">5✦ {t("Pulls")}</h4>
              <div className="flex">
                <span className="text-lg">{stats ? stats.fiveStars : 0}</span>
              </div>
            </div>
            <div className="py-4 px-3 flex justify-between bg-accent dark:opacity-80 rounded-lg">
              <h4 className="text-lg">4✦ {t("Pulls")}</h4>
              <div className="flex">
                <span className="text-lg">{stats ? stats.fourStars : 0}</span>
              </div>
            </div>
          </CardContent>
        </div>
      </Card>
      <Card className="bg-background/80 backdrop-blur-sm w-full">
        <div className="w-full">
          <CardHeader className="text-center md:text-start flex flex-col sm:flex-row justify-between items-center ">
            <div className="flex flex-col sm:flex-row items-center gap-3 flex-wrap">
              {(filter.includes(FilterType.FIVE_STARS) &&
                filter.includes(FilterType.FOUR_STARS)) ||
              filter.length === 0 ? (
                <CardTitle>
                  {t("Recent")} <span className="text-yellow-500">5✦</span>{" "}
                  {t("and")} <span className="text-purple-500">4✦</span>{" "}
                  {t("Convenes")}
                </CardTitle>
              ) : filter.includes(FilterType.FIVE_STARS) ? (
                <CardTitle>
                  {t("Recent")} <span className="text-yellow-500">5✦</span>{" "}
                  {t("Convenes")}
                </CardTitle>
              ) : (
                <CardTitle>
                  {t("Recent")} <span className="text-purple-500">4✦</span>{" "}
                  {t("Convenes")}
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
              <p className="text-muted-foreground text-sm">
                {t("No records found")}.
              </p>
            )}
          </CardContent>
        </div>
      </Card>
      <PullHistory stats={stats} />
    </div>
  );
}
