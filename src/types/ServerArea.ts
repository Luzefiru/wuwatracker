import { z } from "zod";

export const ServerArea = {
  global: "global",
  cn: "cn",
} as const;

export const ServerAreaEnumSchema = z
  .nativeEnum(ServerArea)
  .default(ServerArea.global);
export type ServerAreaEnum = z.infer<typeof ServerAreaEnumSchema>;
