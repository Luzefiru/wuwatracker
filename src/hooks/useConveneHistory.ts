import { useLocalStorage } from 'usehooks-ts';
import extractGachaRecordQueryArgs from '@/lib/extractGachaRecordQueryArgs';
import fetchGachaRecordByCardPoolType from '@/services/fetchGachaRecordByCardPoolType';
import parsePityCounterStats from '@/lib/parsePityCounterStats';
import { GachaRecordQueryResult } from '@/types/GachaRecordQuery';
import { BannerPityDisplayStats } from '@/types/BannerPity';

const LOCALSTORAGE_KEY = 'convene-history-url';

export function useConveneHistory() {
  const [
    savedConveneHistoryUrl,
    setSavedConveneHistoryUrl,
    removeSavedConveneHistoryUrl,
  ] = useLocalStorage(LOCALSTORAGE_KEY, '');
  const queryArgs =
    savedConveneHistoryUrl && savedConveneHistoryUrl !== ''
      ? extractGachaRecordQueryArgs(savedConveneHistoryUrl)
      : null;

  /**
   * After saving the Convene History URL to LocalStorage, you can call this function to fetch the user's Convene History for a specific banner.
   *
   * @param cardPoolType 1-7
   * @returns
   */
  async function getHistoryByCardPoolType(
    cardPoolType: number
  ): Promise<GachaRecordQueryResult | null> {
    if (!queryArgs) {
      return null;
    }

    const historyData = await fetchGachaRecordByCardPoolType(
      cardPoolType,
      queryArgs
    );

    return historyData;
  }

  /**
   * Helper function to get the pity countdown of a user's Convene History.
   *
   * @param cardPoolType 1-7
   * @param fiveStarPity the maximum pity for a 5*
   * @param fourStarPity the maximum pity for a 4*
   * @returns
   */
  async function getCardPoolTypePity(
    cardPoolType: number,
    fiveStarPity: number,
    fourStarPity: number
  ): Promise<BannerPityDisplayStats | null> {
    const cardPoolHistory = await getHistoryByCardPoolType(cardPoolType);

    if (!cardPoolHistory) {
      return null;
    }

    return parsePityCounterStats(
      { fiveStarPity, fourStarPity },
      cardPoolHistory
    );
  }

  return {
    conveneHistoryUrl: savedConveneHistoryUrl,
    saveConveneHistoryUrl: setSavedConveneHistoryUrl,
    removeConveneHistoryUrl: removeSavedConveneHistoryUrl,
    getHistoryByCardPoolType,
    getCardPoolTypePity,
  };
}
