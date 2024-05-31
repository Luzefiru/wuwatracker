import { z } from 'zod';

export const BannerTypeSlug = {
  'limited-character-convene': 'limited-character-convene',
  'limited-weapon-convene': 'limited-weapon-convene',
  'permanent-character-convene': 'permanent-character-convene',
  'permanent-weapon-convene': 'permanent-weapon-convene',
} as const;
export const BannerTypeSlugEnumSchema = z.nativeEnum(BannerTypeSlug);
export type BannerTypeSlugEnum = z.infer<typeof BannerTypeSlugEnumSchema>;
