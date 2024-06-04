import { ConveneHistoryURLParamsSchema } from "@/types/ConveneHistoryURLParams";
import {
  GachaRecordQueryArgs,
  GachaRecordQueryArgsSchema,
} from "@/types/GachaRecordQuery";

/**
 * Extracts the query string parameters from a Convene History URL.
 *
 * @example
 * const url = "https://aki-gm-resources-oversea.aki-game.net/aki/gacha/index.html#/record?svr_id=10cd7254d57e58ae560b15d51e34b4c8&player_id=900643805&lang=en&gacha_id=100001&gacha_type=1&svr_area=global&record_id=e005b89e3a163ff66d2bbc9263b9a434&resources_id=5c13a63f85465e9fcc0f24d6efb15083";
 * const gachaQueryArgs = extractGachaRecordQueryArgs(url);
 *
 * // Outputs:
 * {
 *   languageCode: "en",
 *   playerId: "900643805",
 *   recordId: "e005b89e3a163ff66d2bbc9263b9a434",
 *   serverId: "10cd7254d57e58ae560b15d51e34b4c8",
 * }
 *
 * @param conveneHistoryUrl - The Convene History URL.
 * @returns An object containing the extracted query string parameters.
 */
export default function extractGachaRecordQueryArgs(
  conveneHistoryUrl: string,
): GachaRecordQueryArgs {
  const queryString = conveneHistoryUrl.split("?")[1];
  const params = new URLSearchParams(queryString);
  const queryArgs: Record<string, string> = {};

  params.forEach((value, key) => {
    queryArgs[key] = value;
  });

  const parsedQueryArgs = ConveneHistoryURLParamsSchema.parse(queryArgs);
  const gachaRecordQueryArgs = {
    languageCode: parsedQueryArgs.lang,
    playerId: parsedQueryArgs.player_id,
    recordId: parsedQueryArgs.record_id,
    serverId: parsedQueryArgs.svr_id,
  };

  return GachaRecordQueryArgsSchema.parse(gachaRecordQueryArgs);
}
