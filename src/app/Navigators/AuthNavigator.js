import AppNavigator from "./AppNavigator";
import { LoginScreen } from "../Screens/Auth/LoginScreen";
import { useAuth } from "../Contexts/Auth.context";

export const AuthNavigator = () => {
  const { loggedIn } = useAuth();

  return <>{loggedIn ? <AppNavigator /> : <LoginScreen />}</>;
};
