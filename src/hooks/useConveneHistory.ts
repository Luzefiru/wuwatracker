import { useLocalStorage } from "usehooks-ts";
import { useCallback, useMemo } from "react";
import extractGachaRecordQueryArgs from "@/lib/extractGachaRecordQueryArgs";
import fetchGachaRecordByCardPoolType from "@/services/fetchGachaRecordByCardPoolType";
import parsePityCounterStats from "@/lib/parsePityCounterStats";
import parseBannerStatistics from "@/lib/parseBannerStatistics";
import { GachaRecordQueryResult } from "@/types/GachaRecordQuery";
import { BannerPityDisplayStats } from "@/types/BannerPity";
import { BannerStats } from "@/types/BannerStats";

const LOCALSTORAGE_KEY = "convene-history-url";

export function useConveneHistory() {
  const [
    savedConveneHistoryUrl,
    setSavedConveneHistoryUrl,
    removeSavedConveneHistoryUrl,
  ] = useLocalStorage(LOCALSTORAGE_KEY, "");
  const queryArgs = useMemo(
    () =>
      savedConveneHistoryUrl && savedConveneHistoryUrl !== ""
        ? extractGachaRecordQueryArgs(savedConveneHistoryUrl)
        : null,
    [savedConveneHistoryUrl],
  );

  /**
   * After saving the Convene History URL to LocalStorage, you can call this function to fetch the user's Convene History for a specific banner.
   *
   * @param cardPoolType 1-7
   * @returns
   */
  const getHistoryByCardPoolType = useCallback(
    async (cardPoolType: number): Promise<GachaRecordQueryResult | null> => {
      if (!queryArgs) {
        return null;
      }

      const historyData = await fetchGachaRecordByCardPoolType(
        cardPoolType,
        queryArgs,
      );

      return historyData;
    },
    [queryArgs],
  );

  /**
   * Helper function to get the pity countdown of a user's Convene History.
   *
   * @param cardPoolType 1-7
   * @param fiveStarPity the maximum pity for a 5*
   * @param fourStarPity the maximum pity for a 4*
   * @returns
   */
  const getCardPoolTypePity = useCallback(
    async (
      cardPoolType: number,
      {
        fiveStarPity,
        fourStarPity,
      }: { fiveStarPity: number; fourStarPity: number },
    ): Promise<BannerPityDisplayStats | null> => {
      const historyData = await getHistoryByCardPoolType(cardPoolType);

      if (!historyData) {
        return null;
      }

      return parsePityCounterStats({ fiveStarPity, fourStarPity }, historyData);
    },
    [getHistoryByCardPoolType],
  );

  const getCardPoolTypeStatistics = useCallback(
    async (
      cardPoolType: number,
      pullCost: number,
    ): Promise<BannerStats | null> => {
      const historyData = await getHistoryByCardPoolType(cardPoolType);

      if (!historyData) {
        return null;
      }

      // TODO - featured five & four star IDs cannot be used at the moment due to incapability to easily fetch them
      return parseBannerStatistics(pullCost, [], [], historyData);
    },
    [getHistoryByCardPoolType],
  );

  return {
    conveneHistoryUrl: savedConveneHistoryUrl,
    saveConveneHistoryUrl: setSavedConveneHistoryUrl,
    removeConveneHistoryUrl: removeSavedConveneHistoryUrl,
    getHistoryByCardPoolType,
    getCardPoolTypePity,
    getCardPoolTypeStatistics,
    queryArgs,
  };
}
