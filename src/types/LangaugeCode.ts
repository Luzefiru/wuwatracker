import { z } from "zod";

export const LanguageCode = {
  en: "en",
} as const;

// TODO: Site will always use "en" temporarily to prevent site crashes, more flexible language support is needed
export const LanguageCodeEnumSchema = z.preprocess(
  (_) => LanguageCode.en,
  z.nativeEnum(LanguageCode).default(LanguageCode.en),
);
export type LangaugeCodeEnum = z.infer<typeof LanguageCodeEnumSchema>;
