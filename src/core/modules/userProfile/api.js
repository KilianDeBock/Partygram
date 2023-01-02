import { supabase } from "../../api/supabase";

export const getUserProfiles = async () => {
  return await supabase
    .from("user_profiles")
    .select("*")
    .order("name")
    .throwOnError();
};

export const getUserProfileById = async (id) => {
  return await supabase
    .from("user_profiles")
    .select("*, client:clients(*), logs(*)")
    .eq("id", id)
    .single()
    .throwOnError();
};

export const updateUserProfile = async (user_profile) => {
  return await supabase
    .from("user_profiles")
    .update(user_profile)
    .eq("id", user_profile.id)
    .throwOnError();
};
