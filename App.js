import "react-native-url-polyfill/auto";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import AppContainer from "./src/app/Components/Shared/App/AppContainer";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { Variables } from "./src/app/style";
import { NetworkCheck } from "./src/app/Components/Shared/Network/NetworkCheck";
import { AuthProvider } from "./src/app/Contexts/Auth.context";
import { AuthNavigator } from "./src/app/Navigators/AuthNavigator";
import { QueryClient, QueryClientProvider } from "react-query";

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
      <AuthProvider>
        <AppContainer>
          <View style={styles.container}>
            <NetworkCheck />
            <NavigationContainer theme={AppTheme}>
              <AuthNavigator />
              <StatusBar style="dark" />
            </NavigationContainer>
          </View>
        </AppContainer>
      </AuthProvider>
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Variables.sizes.xl,
    flex: 1,
    backgroundColor: Variables.colors.grayLight,
  },
});
