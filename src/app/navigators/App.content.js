import { AppNavigator } from "./App.navigator";
import { AuthNavigator } from "./Auth.navigator";
import { useAuth } from "../components/shared/Auth/AuthProvider.shared.component";

export const AppContent = () => {
  const { isLoggedIn } = useAuth();

  if (!isLoggedIn) {
    return <AuthNavigator />;
  }

  return <AppNavigator />;
};
