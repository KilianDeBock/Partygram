import { useEffect, useState } from "react";
import { getCurrentSession } from "../modules/auth/api";
import { AuthEvent, supabase } from "./supabase";

const useSupabaseAuth = () => {
  const [isInitialized, setIsInitialized] = useState(false);
  const [auth, setAuth] = useState();

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

  const user = auth ? auth.user : null;

  const isLoggedIn = isInitialized && !!auth;

  return {
    isInitialized,
    isLoggedIn,
    auth,
    user,
  };
};

export default useSupabaseAuth;
