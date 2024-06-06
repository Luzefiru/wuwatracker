import {
  GachaRecordQueryResult,
  GachaRecordQueryResultSchema,
  GachaRecordQueryArgs,
} from "@/types/GachaRecordQuery";
import axios from "axios";
import getServerUrlByArea from "@/lib/getServerUrlByArea";

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
  const baseUrl = getServerUrlByArea(args.serverArea);

  const requestUrl = `${baseUrl}/gacha/record/query`;
  const requestBody = {
    cardPoolType: cardPoolType,
    languageCode: args.languageCode,
    playerId: args.playerId,
    recordId: args.recordId,
    serverId: args.serverId,
  };

  const { data: fetchedData } = await axios.post(requestUrl, requestBody);

  const { success, data } = GachaRecordQueryResultSchema.safeParse(fetchedData);

  if (!success) {
    // TODO: there's probably a better way to do this
    const EMPTY_PLACEHOLDER = {
      code: 0,
      message: "success",
      data: [],
    };

    console.error(
      "Unsuccessful in retrieving data. Try re-importing your URL again or contact the developers with this error message.",
      requestBody,
    );

    return EMPTY_PLACEHOLDER;
  } else {
    return data;
  }
}
