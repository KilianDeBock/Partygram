import { useEffect, useMemo, useState } from "react";
import { getCurrentSession } from "../modules/auth/api";
import { AuthEvent, supabase } from "./supabase";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getFullProfile } from "../modules/userProfile/api";

const useSupabaseAuth = () => {
  const queryClient = useQueryClient();
  const [isInitialized, setIsInitialized] = useState(false);
  const [auth, setAuth] = useState();
  const { data } = useQuery(["profile"], () => getFullProfile());
  const profile = data?.data;

  useEffect(() => {
    const checkAuth = async () => {
      const session = await getCurrentSession();
      setAuth(session);
      queryClient.invalidateQueries(["profile"]);
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
          queryClient.invalidateQueries(["profile"]);
          break;

        case AuthEvent.SIGNED_OUT:
        case AuthEvent.USER_DELETED:
          setAuth(null);
          queryClient.invalidateQueries(["profile"]);
          break;
      }
    });
  }, []);

  const user = useMemo(
    () => (!!auth && !!profile ? { ...auth.user, ...profile } : null),
    [auth, profile]
  );

  const isLoggedIn = isInitialized && !!auth && !!profile;

  return {
    isInitialized,
    isLoggedIn,
    auth,
    user,
  };
};

export default useSupabaseAuth;
