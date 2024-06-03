import { useLocalStorage } from "usehooks-ts";
import { useCallback } from "react";
import { BannerTypeSlugEnum } from "@/types/BannerTypeSlugEnum";
import { bannerMetadata } from "@/data/banners";
import BannerFilter from "@/types/BannerFilter";

const LOCALSTORAGE_KEY = "banner-filters";

export function useBannerFilters() {
  // For now, while banners are a few, this is the same. Later on, it should be filtered more.
  const allBannerFilters = Object.keys(bannerMetadata)
    .map((slug) => {
      return {
        slug: slug as BannerTypeSlugEnum,
        cardPoolType: bannerMetadata[slug as BannerTypeSlugEnum].cardPoolType,
      };
    })
    .sort((a, b) => a.cardPoolType - b.cardPoolType);

  const defaultBannerFilters = allBannerFilters;

  const [savedBannerFilters, setSavedBannerFilters] = useLocalStorage<
    BannerFilter[]
  >(LOCALSTORAGE_KEY, defaultBannerFilters);

  /**
   * Resets banner filters to default.
   */
  const resetBannerFilters = useCallback(() => {
    setSavedBannerFilters(defaultBannerFilters);
  }, [defaultBannerFilters, setSavedBannerFilters]);

  /**
   * Resets banner filters to default.
   */
  const selectAllBannerFilters = useCallback(() => {
    setSavedBannerFilters(allBannerFilters);
  }, [allBannerFilters, setSavedBannerFilters]);

  /**
   * Adds a banner filter based on the `slug` argument.
   *
   * @param cardPoolType a valid BannerTypeSlug value
   */
  const addBannerFilter = useCallback(
    (slug: BannerTypeSlugEnum) => {
      setSavedBannerFilters(
        [
          ...savedBannerFilters,
          {
            slug,
            cardPoolType: bannerMetadata[slug].cardPoolType,
          },
        ].sort((a, b) => a.cardPoolType - b.cardPoolType),
      );
    },
    [savedBannerFilters, setSavedBannerFilters],
  );

  /**
   * Removes a banner filter based on the `slug` argument.
   *
   * @param cardPoolType a valid BannerTypeSlug value
   */
  const removeBannerFilter = useCallback(
    (slug: BannerTypeSlugEnum) => {
      setSavedBannerFilters(
        [...savedBannerFilters.filter((f) => f.slug !== slug)].sort(
          (a, b) => a.cardPoolType - b.cardPoolType,
        ),
      );
    },
    [savedBannerFilters, setSavedBannerFilters],
  );

  return {
    bannerFilters: savedBannerFilters,
    allBannerFilters,
    selectAllBannerFilters,
    resetBannerFilters,
    addBannerFilter,
    removeBannerFilter,
  };
}
