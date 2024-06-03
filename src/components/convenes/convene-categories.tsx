"use client";

import * as React from "react";
import ConveneCategoryCard from "./convene-category-card";
import { bannerMetadata } from "@/data/banners";
import { BannerTypeSlug } from "@/types/BannerTypeSlugEnum";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Import, Filter } from "lucide-react";
import { ConveneFilter } from "./convene-filter";

export function ConveneCategories() {
  return (
    <>
      <div className="mb-2 flex flex-col md:flex-row justify-between gap-8">
        <div className="flex w-full">
          <h2 className="scroll-m-20 text-4xl font-semibold tracking-tight text-center md:text-start">
            Convene Tracker
          </h2>
          <Button
            asChild
            className="lg:inline-flex hidden ml-auto size-11"
            variant="outline"
            size="icon"
          >
            <Link href="/import">
              <Filter className="h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="flex w-full gap-2 lg:hidden">
          <Button
            asChild
            className="lg:hidden flex-1"
            variant="default"
            size="lg"
          >
            <Link href="/import">
              <Import className="mr-2 h-4 w-4" /> Import
            </Link>
          </Button>
          <Button
            asChild
            className="lg:hidden size-11"
            variant="outline"
            size="icon"
          >
            <Link href="/import">
              <Filter className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>

      <ConveneCategoryCard
        {...bannerMetadata[BannerTypeSlug["limited-character"]]}
      />
      <ConveneCategoryCard
        {...bannerMetadata[BannerTypeSlug["limited-weapon"]]}
      />
      <ConveneCategoryCard
        {...bannerMetadata[BannerTypeSlug["permanent-character"]]}
      />
      <ConveneCategoryCard
        {...bannerMetadata[BannerTypeSlug["permanent-weapon"]]}
      />
      <ConveneCategoryCard {...bannerMetadata[BannerTypeSlug["starter"]]} />
      <ConveneCategoryCard
        {...bannerMetadata[BannerTypeSlug["starter-selector"]]}
      />
    </>
  );
}
