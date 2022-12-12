import { AppNavigator } from "./AppNavigator";
import { AuthNavigator } from "./AuthNavigator";
import { useAuth } from "../Components/Shared/Auth/AuthProvider";

export const AppContent = () => {
  const { isLoggedIn } = useAuth();

  if (!isLoggedIn) {
    return <AuthNavigator />;
  }

  return <AppNavigator />;
};
