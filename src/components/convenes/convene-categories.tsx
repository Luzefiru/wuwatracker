"use client";

import ConveneCategoryCard from "./convene-category-card";
import { bannerMetadata } from "@/data/banners";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Filter } from "lucide-react";
import { ConveneFilter } from "./convene-filter";
import { useBannerFilters } from "@/hooks/useBannerFilters";
import { useState, useEffect } from "react";
import { ConveneCategoryCardSkeleton } from "./convene-category-card-skeleton";
import { useTranslations } from "next-intl";

export function ConveneCategories() {
  const t = useTranslations("Convene.Sidebar.ConveneCategories");
  const [isLoading, setIsLoading] = useState(false);
  const { bannerFilters } = useBannerFilters();

  // Two-pass rendering to avoid hydration mismatches, see: https://react.dev/reference/react-dom/client/hydrateRoot#handling-different-client-and-server-content
  useEffect(() => {
    setIsLoading(true);
  }, []);

  const bannerCards = bannerFilters.length ? (
    bannerFilters.map((f) => {
      return (
        <ConveneCategoryCard
          key={`show-banner-${f.cardPoolType}`}
          {...bannerMetadata[f.slug]}
        />
      );
    })
  ) : (
    <p className="text-muted-foreground text-sm text-center md:text-start">
      {t("No banners selected")}.
    </p>
  );

  return (
    <>
      <div className="mb-1 flex flex-col md:flex-row justify-between gap-8">
        <div className="flex w-full">
          <h2 className="scroll-m-20 text-4xl font-semibold tracking-tight text-center md:text-start">
            {t("Convene Tracker")}
          </h2>
          <ConveneFilter btnClassName="lg:inline-flex hidden ml-auto size-11" />
        </div>
        <div className="flex w-full gap-2 lg:hidden">
          <Button
            asChild
            className="lg:hidden flex-1"
            variant="default"
            size="lg"
          >
            <Link href="/import">
              <Filter className="mr-2 h-4 w-4" /> {t("Import")}
            </Link>
          </Button>
          <ConveneFilter btnClassName="lg:hidden size-11" />
        </div>
      </div>

      {isLoading
        ? bannerCards
        : [1, 2, 3, 4].map((n) => {
            return <ConveneCategoryCardSkeleton key={`loading-banner-${n}`} />;
          })}
    </>
  );
}
