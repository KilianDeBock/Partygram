import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";
import Constants from "expo-constants";

const { SUPABASE_KEY, SUPABASE_URL } = Constants.manifest.extra;

const supabaseUrl = SUPABASE_URL;
const supabaseKey = SUPABASE_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    storage: AsyncStorage,
    detectSessionInUrl: false, // Prevents Supabase from evaluating window.location.href, breaking mobile,
    autoRefreshToken: true,
    persistSession: true,
  },
});

export const AuthEvent = {
  SIGNED_IN: "SIGNED_IN",
  USER_UPDATED: "USER_UPDATED",
  TOKEN_REFRESHED: "TOKEN_REFRESHED",
  SIGNED_OUT: "SIGNED_OUT",
  USER_DELETED: "USER_DELETED",
};
