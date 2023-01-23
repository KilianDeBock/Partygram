import { createContext, useContext } from "react";
import useSupabaseAuth from "../../../../core/api/useSupabaseAuth";
import { useSettings } from "../../../../core/hooks/useSettings";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const { isInitialized, isLoggedIn, user, auth } = useSupabaseAuth();
  const { settings, updateSettings } = useSettings();

  return (
    <AuthContext.Provider
      value={{ auth, isLoggedIn, user, settings, updateSettings }}
    >
      {isInitialized && settings.settingsReceived ? children : null}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
