import { decode } from "base64-arraybuffer";
import { supabase } from "../../api/supabase";

export const uploadImage = async (bucket, filename, image) => {
  const { data, error } = await supabase.storage
    .from(bucket)
    .upload(filename, decode(image), {
      contentType: "image/png",
    });

  if (error) {
    return Promise.reject(error);
  }
  return Promise.resolve(data);
};
