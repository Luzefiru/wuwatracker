"use client";

import * as React from "react";
import ConveneCategoryCard from "./convene-category-card";
import { bannerMetadata } from "@/data/banners";

export function ConveneCategories() {
  return (
    <>
      <ConveneCategoryCard {...bannerMetadata["limited-character"]} />
      <ConveneCategoryCard {...bannerMetadata["limited-weapon"]} />
      <ConveneCategoryCard {...bannerMetadata["permanent-character"]} />
      <ConveneCategoryCard {...bannerMetadata["permanent-weapon"]} />
    </>
  );
}
