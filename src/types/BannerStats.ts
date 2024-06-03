import { z } from "zod";
import { GachaRecordQueryResultDataSchema } from "./GachaRecordQuery";

export const BannerStatsSchema = z.object({
  totalAstrites: z.number().gte(0),
  totalPulls: z.number().gte(0),
  fiveStars: z.number().gte(0),
  fourStars: z.number().gte(0),
  featuredFiveStars: z.number().gte(0),
  featuredFourStars: z.number().gte(0),
  fiveStarObjects: z.array(
    GachaRecordQueryResultDataSchema.extend({
      pullNumber: z.number().gte(0),
      fiveStarCurrentPity: z.number().gte(0),
      fourStarCurrentPity: z.number().gte(0),
      previousFiveStarPullNumber: z.number().gte(0),
      previousFourStarPullNumber: z.number().gte(0),
    }),
  ),
  fourStarObjects: z.array(GachaRecordQueryResultDataSchema),
});
export type BannerStats = z.infer<typeof BannerStatsSchema>;
