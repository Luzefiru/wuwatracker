import { z } from 'zod';

export const BannerStatsSchema = z.object({
  totalAstrites: z.number().gte(0),
  totalPulls: z.number().gte(0),
  fiveStars: z.number().gte(0),
  fourStars: z.number().gte(0),
  featuredFiveStars: z.number().gte(0),
  featuredFourStars: z.number().gte(0),
});
export type BannerStats = z.infer<typeof BannerStatsSchema>;
