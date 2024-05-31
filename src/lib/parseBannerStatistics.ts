import { BannerStats } from '@/types/BannerStats';
import { GachaRecordQueryResult } from '@/types/GachaRecordQuery';

// TODO - refactor this mess, I apologize to all my teachers & mentors
export default function parseBannerStatistics(
  pullCost: number,
  // TODO - there isn't a reliable way to fetch the resource ID of a resonator/weapon, so these are unused
  featuredFiveStarResourceIds: number[], // multiple in case future banners have multiple 5* rate ups
  featuredFourStarResourceIds: number[], // multiple 4* are rate up
  gachaRecord: GachaRecordQueryResult
): BannerStats {
  // The 0th index is the newest record, so we reverse the start with the earliest pull
  const pulls = gachaRecord.data;
  pulls.reverse();

  let fiveStarCurrentPity = 0,
    fourStarCurrentPity = 0,
    previousFiveStarPullNumber = 0,
    previousFourStarPullNumber = 0;

  // Starting from the oldest record,
  // we track the pull number and current pity to derive what pity did the user pull an object
  const pullsWithPity = pulls.map((p, index) => {
    const currentPullNumber = index + 1;
    let previousFiveStarTmp = previousFiveStarPullNumber;
    let previousFourStarTmp = previousFourStarPullNumber;

    switch (p.qualityLevel) {
      case 5:
        previousFiveStarPullNumber = currentPullNumber;
        previousFourStarPullNumber = currentPullNumber;
        fiveStarCurrentPity = 0;
        fourStarCurrentPity = 0;
        break;
      case 4:
        previousFourStarPullNumber = currentPullNumber;
        fiveStarCurrentPity++;
        fourStarCurrentPity = 0;
        break;
      default:
        fiveStarCurrentPity++;
        fourStarCurrentPity++;
    }

    return {
      ...p,
      pullNumber: currentPullNumber,
      fiveStarCurrentPity,
      fourStarCurrentPity,
      previousFiveStarPullNumber: previousFiveStarTmp,
      previousFourStarPullNumber: previousFourStarTmp,
    };
  });

  const fiveStars = pullsWithPity.filter((p) => p.qualityLevel === 5);
  const fourStars = pullsWithPity.filter((p) => p.qualityLevel === 4);
  const totalAstrites = pullCost * pulls.length;
  const totalPulls = pulls.length;
  const featuredFiveStars = fiveStars.filter((f) =>
    featuredFiveStarResourceIds.includes(f.resourceId)
  );
  const featuredFourStars = fourStars.filter((f) =>
    featuredFourStarResourceIds.includes(f.resourceId)
  );

  return {
    totalAstrites,
    totalPulls,
    fiveStars: fiveStars.length,
    fourStars: fourStars.length,
    featuredFiveStars: featuredFiveStars.length,
    featuredFourStars: featuredFourStars.length,
    fiveStarObjects: fiveStars,
    fourStarObjects: fourStars,
  };
}
