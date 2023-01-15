import { supabase } from "../../api/supabase";
import { uploadImage } from "../files/api";
import { Bucket } from "../files/constants";

export const getStories = async () => {
  const date = new Date();
  date.setHours(date.getHours() - 24);
  const dateString = date.toISOString();

  return supabase
    .from("posts")
    .select("*")
    .is("story", true)
    .gt("created_at", dateString)
    .order("created_at", { ascending: false })
    .throwOnError();
};

export const getPosts = async () => {
  const date = new Date();
  date.setHours(date.getHours() - 24);
  const dateString = date.toISOString();

  return supabase
    .from("posts")
    .select("*")
    .is("story", false)
    .gt("created_at", dateString)
    .order("created_at", { ascending: false })
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
  let { postFile } = body;

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const fileName = `${user.id}/${Date.now()}.png`;
  await uploadImage(Bucket.Posts, fileName, postFile);

  const { error } = await supabase.from("posts").insert({
    story: true,
    image: fileName,
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
