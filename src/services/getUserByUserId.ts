import supabase from "@/lib/supabase/client/instance";
import { User, UserSchema } from "@/types/User";

export default async function getUserByUserId(userId: string): Promise<User> {
  const { data, error } = await supabase
    .from("users")
    .select("*")
    .eq("user_id", userId);

  if (error) {
    throw error;
  }

  if (data.length === 0) {
    throw Error("No user record created with that userId!");
  }

  const formattedData = {
    id: data[0].id,
    createdAt: data[0].created_at,
    userId: data[0].user_id,
    playerId: data[0].player_id,
    conveneHistoryUrl: data[0].convene_history_url,
    isSharingData: data[0].is_sharing_data,
  };

  return UserSchema.parse(formattedData);
}
