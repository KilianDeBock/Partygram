import { useAuth } from "../../components/shared/Auth/AuthProvider.shared.component";
import { AuthNavigator } from "../Auth/Auth.navigator";
import { AppNavigator } from "./App.navigator";

export const AppContent = () => {
  const { isLoggedIn } = useAuth();

  if (!isLoggedIn) {
    return <AuthNavigator />;
  }

  return <AppNavigator />;
};
