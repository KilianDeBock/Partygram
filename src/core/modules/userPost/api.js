import { supabase } from "../../api/supabase";

export const updateUserPost = async (userId, postId, data) => {
  const { data: userPost } = await supabase
    .from("user_post")
    .select("*")
    .eq("user_id", userId)
    .eq("post", postId)
    .throwOnError();

  if (userPost.length > 0) {
    const { data: updated } = await supabase
      .from("user_post")
      .update(data)
      .eq("user_id", userId)
      .eq("post", postId)
      .throwOnError();

    return updated;
  } else {
    const { data: inserted } = await supabase
      .from("user_post")
      .insert({
        user_id: userId,
        post: postId,
        ...data,
      })
      .throwOnError();

    return inserted;
  }
};
