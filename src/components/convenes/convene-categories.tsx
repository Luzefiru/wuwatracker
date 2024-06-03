"use client";

import * as React from "react";
import ConveneCategoryCard from "./convene-category-card";
import { bannerMetadata } from "@/data/banners";
import { BannerTypeSlug } from "@/types/BannerTypeSlugEnum";

export function ConveneCategories() {
  return (
    <>
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
