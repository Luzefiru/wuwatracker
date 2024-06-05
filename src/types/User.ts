import { z } from "zod";

export const UserSchema = z.object({
  id: z.number().optional(),
  createdAt: z.string().optional(),
  userId: z.string().uuid(), // uuid from Supabase Auth table
  playerId: z.number().nullish(), // id from Wuthering Waves Convene History URL
  conveneHistoryUrl: z.string().nullish(),
  isSharingData: z.boolean(),
});
export type User = z.infer<typeof UserSchema>;
