import { z } from 'zod';

export const BannerTypeSlug = {
  'limited-character': 'limited-character',
  'limited-weapon': 'limited-weapon',
  'permanent-character': 'permanent-character',
  'permanent-weapon': 'permanent-weapon',
} as const;
export const BannerTypeSlugEnumSchema = z.nativeEnum(BannerTypeSlug);
export type BannerTypeSlugEnum = z.infer<typeof BannerTypeSlugEnumSchema>;
