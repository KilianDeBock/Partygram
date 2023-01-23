import { supabase } from "../../api/supabase";
import { uploadImage } from "../files/api";
import { Bucket } from "../files/constants";

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

export const getMe = async () => {
  const userId = (await supabase.auth.getUser()).data.user.id;

  return await supabase
    .from("user_profiles")
    .select("*")
    .eq("auth", userId)
    .single()
    .throwOnError();
};

export const getFullProfile = async () => {
  const userId = (await supabase.auth.getUser()).data.user.id;

  const res = await supabase
    .from("user_profiles")
    .select("*, posts(*)")
    .eq("auth", userId)
    .single();

  return res;
};

export const updateUserProfile = async (body) => {
  let { postFile, ...rest } = body;
  const userId = (await supabase.auth.getUser()).data.user.id;
  const data = { ...rest };

  if (!!postFile) {
    const fileName = `${userId}/${Date.now()}.png`;
    await uploadImage(Bucket.Avatars, fileName, postFile);
    data.avatar = fileName;
  }

  const { error } = await supabase
    .from("user_profiles")
    .update(data)
    .eq("auth", userId)
    .throwOnError();

  if (error) {
    return Promise.resolve(error);
  }
};
