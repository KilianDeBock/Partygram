import { useAuth } from "../../components/shared/Auth/AuthProvider.shared.component";
import { AuthNavigator } from "../Auth/Auth.navigator";
import { AppNavigator } from "./App.navigator";
import { useEffect, useState } from "react";
import LoadingIndicator from "../../components/design/Loading/LoadingIndicator.design.component";

export const AppContent = () => {
  const { isLoggedIn } = useAuth();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsReady(true);
    }, 500);
    return () => clearTimeout(timeout);
  }, [isLoggedIn]);

  if (!isReady) {
    return <LoadingIndicator />;
  }

  if (!isLoggedIn) {
    return <AuthNavigator />;
  }

  return <AppNavigator />;
};
