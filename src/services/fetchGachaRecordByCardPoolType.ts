import {
  GachaRecordQueryResult,
  GachaRecordQueryResultSchema,
  GachaRecordQueryArgs,
} from "@/types/GachaRecordQuery";
import axios from "axios";

/**
 * Fetches the gacha records of a cardPoolType given the `GachaRecordQueryArgs` fetched from a user's Convene History URL fetched from the game logs.
 * Otherwise, throws a `ZodError` on incorrect arguments or external API issues.
 *
 * @example
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
 *     ...
 *   ]
 * };
 *
 * @param args the `GachaRecordQueryArgs` extracted from the Convene History URL
 * @returns
 */
export default async function fetchGachaRecordByCardPoolType(
  cardPoolType: number,
  args: GachaRecordQueryArgs,
): Promise<GachaRecordQueryResult> {
  // TODO: Consider decoupling this when this API endpoint is reused in multiple places
  const BASE_URL = "https://gmserver-api.aki-game2.net";
  const requestUrl = `${BASE_URL}/gacha/record/query`;
  const requestBody = {
    cardPoolType: cardPoolType,
    languageCode: args.languageCode,
    playerId: args.playerId,
    recordId: args.recordId,
    serverId: args.serverId,
  };

  const { data } = await axios.post(requestUrl, requestBody);

  return GachaRecordQueryResultSchema.parse(data);
}
