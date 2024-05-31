import { z } from 'zod';

export const BannerPitySchema = z.object({
  fiveStarPity: z.number().gt(0),
  fourStarPity: z.number().gt(0),
});
export type BannerPity = z.infer<typeof BannerPitySchema>;

export const BannerPityDisplayStatsSchema = BannerPitySchema.extend({
  fiveStarCurrent: z.number().gte(0),
  fourStarCurrent: z.number().gte(0),
});
export type BannerPityDisplayStats = z.infer<
  typeof BannerPityDisplayStatsSchema
>;
