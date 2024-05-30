import { z } from 'zod';

export const ResourceType = {
  Resonators: 'Resonators',
  Weapons: 'Weapons',
} as const;
export const ResourceTypeEnumSchema = z.nativeEnum(ResourceType);
export type ResourceTypeEnum = z.infer<typeof ResourceTypeEnumSchema>;

export const GachaRecordQueryResultDataSchema = z.object({
  cardPoolType: z.string(),
  resourceId: z.number(),
  qualityLevel: z.number(),
  resourceType: z.string(),
  name: z.string(),
  count: z.number(),
  time: z.coerce.date(),
});
export type GachaRecordQueryResultData = z.infer<
  typeof GachaRecordQueryResultDataSchema
>;

export const GachaRecordQueryResultSchema = z.object({
  code: z.number(),
  message: z.string(),
  data: z.array(GachaRecordQueryResultDataSchema),
});
export type GachaRecordQueryResult = z.infer<
  typeof GachaRecordQueryResultSchema
>;
