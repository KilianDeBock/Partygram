import { supabase } from "../../api/supabase";
import { uploadImage } from "../files/api";
import { Bucket } from "../files/constants";
import { getSupabaseDate } from "../../utils/getSupabaseDate";

export const getStories = async () => {
  const userId = (await supabase.auth.getUser()).data.user.id;

  const date = new Date();
  date.setHours(date.getHours() - 24);
  const dateString = date.toISOString();

  const { data } = await supabase
    .from("posts")
    .select("*")
    .neq("user_id", userId)
    .is("story", true)
    .gt("created_at", dateString)
    .order("created_at", { ascending: false })
    .throwOnError();

  const stories = data ?? [];

  if (stories.length < 1) {
    return { data: [] };
  }

  const filtered = [...new Set(stories.map((i) => i.user_id))].map((id) =>
    stories.find((i) => i.user_id === id)
  );

  return { data: filtered };
};

export const getPosts = async (lastItem = null) => {
  const userId = (await supabase.auth.getUser()).data.user.id;

  const startFromDate = lastItem?.created_at ?? lastItem ?? getSupabaseDate();
  const last24Hours = getSupabaseDate(null, 24);

  return supabase
    .from("posts")
    .select("*")
    .neq("user_id", userId)
    .is("story", false)
    .lt("created_at", startFromDate) // time is less than last loaded item
    .gt("created_at", last24Hours) // time is greater than 24h
    .order("created_at", { ascending: false })
    .range(0, 10)
    .limit(10)
    .throwOnError();
};

export const searchPosts = async (search) => {
  const { data: titles } = await supabase
    .from("posts")
    .select("*")
    .ilike("title", `%${search}%`)
    .order("created_at", { ascending: false })
    .throwOnError();

  const { data: descriptions } = await supabase
    .from("posts")
    .select("*")
    .ilike("description", `%${search}%`)
    .order("created_at", { ascending: false })
    .throwOnError();

  const all = [...titles, ...descriptions];
  return (
    // Make a set of all the ids and convert it back to an array. (This removes duplicates)
    [...new Set(all.map((i) => i.id))]
      // Map the ids back to the original objects
      .map((id) => all.find((i) => i.id === id))
  );
};

export const getMyPosts = async () => {
  const userId = (await supabase.auth.getUser()).data.user.id;

  return supabase
    .from("posts")
    .select("*")
    .is("story", false)
    .eq("user_id", userId)
    .order("created_at", { ascending: false })
    .throwOnError();
};

export const getMyStories = async () => {
  const userId = (await supabase.auth.getUser()).data.user.id;

  return supabase
    .from("posts")
    .select("*")
    .is("story", true)
    .eq("user_id", userId)
    .order("created_at", { ascending: false })
    .throwOnError();
};

export const getPostById = async (id) => {
  return await supabase
    .from("posts")
    .select("*")
    .eq("id", id)
    .single()
    .throwOnError();
};

export const createPost = async (body) => {
  let { postFile, ...rest } = body;

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const fileName = `${user.id}/${Date.now()}.png`;
  await uploadImage(Bucket.Posts, fileName, postFile);

  const { error } = await supabase.from("posts").insert({
    story: false,
    image: fileName,
    ...rest,
  });

  if (error) {
    return Promise.resolve(error);
  }
};

export const createStory = async (body) => {
  let { postFile, location } = body;

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const fileName = `${user.id}/${Date.now()}.png`;
  await uploadImage(Bucket.Posts, fileName, postFile);

  const { error } = await supabase.from("posts").insert({
    story: true,
    image: fileName,
    location,
  });

  if (error) {
    return Promise.resolve(error);
  }
};

export const updatePost = async (post) => {
  return await supabase
    .from("posts")
    .update(post)
    .eq("id", post.id)
    .throwOnError();
};

export const likeOrPinPost = async (id, { liked, pinned }) => {
  const { error } = await supabase
    .from("user_post")
    .select("*")
    .eq("post", id)
    .single();

  if (error) {
    return await supabase
      .from("user_post")
      .insert({
        story: true,
        image: fileName,
        location,
      })
      .throwOnError();
  } else {
    return await supabase
      .from("user_post")
      .update(post)
      .eq("post", id)
      .throwOnError();
  }
};
