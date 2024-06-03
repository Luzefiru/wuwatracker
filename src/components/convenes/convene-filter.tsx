"use client";

import * as React from "react";
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Filter } from "lucide-react";
import { BannerTypeSlugEnum } from "@/types/BannerTypeSlugEnum";
import { bannerMetadata } from "@/data/banners";
import { useBannerFilters } from "@/hooks/useBannerFilters";

interface Props {
  btnClassName: string;
}

export function ConveneFilter({ btnClassName }: Props) {
  const isChecked = (slug: BannerTypeSlugEnum) =>
    [...bannerFilters.map((i) => i.slug)].includes(slug);

  const {
    bannerFilters,
    allBannerFilters,
    addBannerFilter,
    removeBannerFilter,
    resetBannerFilters,
    selectAllBannerFilters,
  } = useBannerFilters();

  const handleClickItem = (slug: BannerTypeSlugEnum) => {
    if (isChecked(slug)) {
      removeBannerFilter(slug);
    } else {
      addBannerFilter(slug);
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className={btnClassName} variant="outline" size="icon">
          <Filter className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="px-2 gap-2">
        <DropdownMenuLabel className="text-lg">
          Banners to Display
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        {allBannerFilters.map((f) => {
          return (
            <DropdownMenuCheckboxItem
              key={`filter-${f.slug}-${btnClassName.replaceAll(" ", "-")}`}
              checked={isChecked(f.slug)}
              onCheckedChange={() => handleClickItem(f.slug)}
              onSelect={(e) => {
                e.preventDefault();
              }}
            >
              {bannerMetadata[f.slug].title}
            </DropdownMenuCheckboxItem>
          );
        })}
        <DropdownMenuSeparator />
        <div className="flex gap-2 w-full justify-between py-2">
          <Button
            className="text-sm text-muted-foreground font-normal"
            variant="ghost"
            size="sm"
            onClick={resetBannerFilters}
          >
            Reset
          </Button>{" "}
          <Button onClick={selectAllBannerFilters} variant="outline" size="sm">
            Select All
          </Button>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
