import { supabase } from "../../api/supabase";

// get public url from Supabase Storage. This is based on the settings when Supabase is initialized
export const getPublicUrl = (bucket, filename) => {
  const { data, error } = supabase.storage.from(bucket).getPublicUrl(filename);

  if (error) {
    return null;
  }

  return data.publicUrl;
};
