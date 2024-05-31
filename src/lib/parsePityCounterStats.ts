import { GachaRecordQueryResult } from '@/types/GachaRecordQuery';
import { BannerPity, BannerPityDisplayStats } from '@/types/BannerPity';

export default function parsePityCounterStats(
  bannerPityStats: BannerPity,
  gachaRecord: GachaRecordQueryResult
): BannerPityDisplayStats {
  // The 0th index is the newest record, so we reverse the start with the earliest pull
  const pulls = gachaRecord.data;
  pulls.reverse();

  let fiveStarCurrent = 0,
    fourStarCurrent = 0;

  pulls.forEach((p) => {
    switch (p.qualityLevel) {
      case 5:
        fiveStarCurrent = 0;
        fourStarCurrent = 0;
        break;
      case 4:
        fiveStarCurrent++;
        fourStarCurrent = 0;
        break;
      default:
        fiveStarCurrent++;
        fourStarCurrent++;
    }
  });

  return {
    ...bannerPityStats,
    fiveStarCurrent,
    fourStarCurrent,
  };
}
