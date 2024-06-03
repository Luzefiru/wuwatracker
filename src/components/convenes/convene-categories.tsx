"use client";

import * as React from "react";
import ConveneCategoryCard from "./convene-category-card";
import { bannerMetadata } from "@/data/banners";
import { BannerTypeSlug } from "@/types/BannerTypeSlugEnum";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Import } from "lucide-react";

export function ConveneCategories() {
  return (
    <>
      <div className="mb-2 flex flex-col md:flex-row justify-between gap-8">
        <h2 className="scroll-m-20 text-4xl font-semibold tracking-tight text-center md:text-start">
          Convene Tracker
        </h2>
        <Button asChild className="lg:hidden" variant="default" size="lg">
          <Link href="/import">
            <Import className="mr-2 h-4 w-4" /> Import
          </Link>
        </Button>
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
