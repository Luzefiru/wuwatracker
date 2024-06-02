import { z } from "zod";
import { LanguageCodeEnumSchema } from "./LangaugeCode";

export const ConveneHistoryURLSchema = z
  .string()
  .regex(
    /^(https?:\/\/)([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/,
    "Invalid Convene History URL",
  );
export type ConveneHistoryURL = z.infer<typeof ConveneHistoryURLSchema>;

export const ConveneHistoryURLParamsSchema = z.object({
  svr_id: z.string(),
  player_id: z.string(),
  lang: LanguageCodeEnumSchema,
  gacha_id: z.string(),
  gacha_type: z.string(),
  svr_area: z.string(),
  record_id: z.string(),
  resources_id: z.string(),
});
export type ConveneHistoryURLParams = z.infer<
  typeof ConveneHistoryURLParamsSchema
>;
