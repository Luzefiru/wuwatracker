import supabase from "@/lib/supabase/client/instance";
import { User, UserSchema } from "@/types/User";

export default async function syncConveneHistoryUrl(user: User): Promise<User> {
  const { data, error } = await supabase
    .from("users")
    .upsert({
      id: user.id,
      user_id: user.userId,
      player_id: user.playerId,
      convene_history_url: user.conveneHistoryUrl,
      is_sharing_data: user.isSharingData,
    })
    .select();

  if (error) {
    throw error;
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
