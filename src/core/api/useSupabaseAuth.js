import { useEffect, useMemo, useState } from "react";
import { getCurrentSession } from "../modules/auth/api";
import { AuthEvent, supabase } from "./supabase";

const useSupabaseAuth = () => {
  const [isInitialized, setIsInitialized] = useState(false);
  const [auth, setAuth] = useState();
  const [profile, setProfile] = useState();

  useEffect(() => {
    const checkAuth = async () => {
      const session = await getCurrentSession();
      setAuth(session);
      setIsInitialized(true);
    };
    checkAuth();
  }, []);

  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      switch (event) {
        case AuthEvent.SIGNED_IN:
        case AuthEvent.USER_UPDATED:
        case AuthEvent.TOKEN_REFRESHED:
          setAuth(session);
          break;

        case AuthEvent.SIGNED_OUT:
        case AuthEvent.USER_DELETED:
          setAuth(null);
          break;
      }
    });
  }, []);

  useEffect(() => {
    // If no user or user id stop here.
    if (!auth?.user?.id) return;
    const getProfile = async () => {
      const { data: profile, error } = await supabase
        .from("user_profiles")
        .select("*")
        .eq("auth", auth?.user.id)
        .single();

      if (!error) setProfile(profile);
    };
    getProfile();
  }, []);

  const user = useMemo(
    () => (!!auth && !!profile ? { ...auth.user, ...profile } : null),
    [auth, profile]
  );

  const isLoggedIn = isInitialized && !!auth;

  return {
    isInitialized,
    isLoggedIn,
    auth,
    user,
  };
};

export default useSupabaseAuth;
