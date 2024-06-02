import { z } from "zod";

export const LanguageCode = {
  en: "en",
} as const;
export const LanguageCodeEnumSchema = z.nativeEnum(LanguageCode);
export type LangaugeCodeEnum = z.infer<typeof LanguageCodeEnumSchema>;
