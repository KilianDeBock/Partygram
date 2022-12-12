import "react-native-url-polyfill/auto";
import { StatusBar } from "expo-status-bar";
import { AppContainer } from "./src/app/Components/Shared/App/AppContainer";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { Variables } from "./src/app/style";
import { QueryClient, QueryClientProvider } from "react-query";
import { AppContent } from "./src/app/Navigators/AppContent";
import { AuthProvider } from "./src/app/Components/Shared/Auth/AuthProvider";

const AppTheme = {
  ...DefaultTheme,
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    primary: Variables.colors.primary,
    background: Variables.colors.background,
    text: Variables.colors.headerText,
    card: Variables.colors.primary,
  },
};

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppContainer>
        <AuthProvider>
          <NavigationContainer theme={AppTheme}>
            <AppContent />
            <StatusBar style="dark" />
          </NavigationContainer>
        </AuthProvider>
      </AppContainer>
    </QueryClientProvider>
  );
}
