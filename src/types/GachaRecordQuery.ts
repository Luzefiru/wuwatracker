import { z } from "zod";
import { LanguageCodeEnumSchema } from "./LangaugeCode";

export const ResourceType = {
  Resonators: "Resonators",
  Weapons: "Weapons",
} as const;
export const ResourceTypeEnumSchema = z.nativeEnum(ResourceType);
export type ResourceTypeEnum = z.infer<typeof ResourceTypeEnumSchema>;

export const GachaRecordQueryArgsSchema = z.object({
  languageCode: LanguageCodeEnumSchema,
  playerId: z.string(),
  recordId: z.string(),
  serverId: z.string(),
});
export type GachaRecordQueryArgs = z.infer<typeof GachaRecordQueryArgsSchema>;

/**
 * A single record in the `response.data[]` array.
 */
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

/**
 * Example Response:
 *
 * const dataObject = {
 *   "code": 0,
 *   "message": "success",
 *   "data": [
 *     {
 *       "cardPoolType": "Resonators Accurate Modulation",
 *       "resourceId": 1204,
 *       "qualityLevel": 4,
 *       "resourceType": "Resonators",
 *       "name": "Mortefi",
 *       "count": 1,
 *       "time": "2024-05-24 19:43:32"
 *     },
 *     {
 *       "cardPoolType": "Resonators Accurate Modulation",
 *       "resourceId": 21040043,
 *       "qualityLevel": 3,
 *       "resourceType": "Weapons",
 *       "name": "Gauntlets of Voyager",
 *       "count": 1,
 *       "time": "2024-05-24 19:43:32"
 *     },
 *   ]
 * };
 */
export const GachaRecordQueryResultSchema = z.object({
  code: z.number(),
  message: z.string().refine((s) => s === "success", {
    message: "There was an error fetching gacha records!",
  }),
  data: z.array(GachaRecordQueryResultDataSchema),
});
export type GachaRecordQueryResult = z.infer<
  typeof GachaRecordQueryResultSchema
>;
