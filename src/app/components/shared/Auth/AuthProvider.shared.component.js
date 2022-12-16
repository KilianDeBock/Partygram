import { createContext, useContext } from "react";
import useSupabaseAuth from "../../../../core/api/useSupabaseAuth";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const { isInitialized, isLoggedIn, user, auth } = useSupabaseAuth();

  return (
    <AuthContext.Provider value={{ auth, isLoggedIn, user }}>
      {isInitialized ? children : null}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
