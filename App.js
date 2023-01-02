import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import "react-native-url-polyfill/auto";
import { AppContainer } from "./src/app/components/shared/App/AppContainer.shared.component";
import { AuthProvider } from "./src/app/components/shared/Auth/AuthProvider.shared.component";
import { AppContent } from "./src/app/navigators/App/App.content";
import { Variables } from "./src/app/style";

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
      <SafeAreaProvider>
        <AppContainer>
          <AuthProvider>
            <NavigationContainer theme={AppTheme}>
              <AppContent />
              <StatusBar style="dark" />
            </NavigationContainer>
          </AuthProvider>
        </AppContainer>
      </SafeAreaProvider>
    </QueryClientProvider>
  );
}
