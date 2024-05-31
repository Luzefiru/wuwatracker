import { BannerStats } from '@/types/BannerStats';
import { GachaRecordQueryResult } from '@/types/GachaRecordQuery';

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

  const fiveStars = pulls.filter((p) => p.qualityLevel === 5);
  const fourStars = pulls.filter((p) => p.qualityLevel === 4);
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
  };
}
