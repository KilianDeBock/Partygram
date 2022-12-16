import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Navigation } from "../../core/navigation";
import { LoginScreen } from "../screens/Auth/Login.screen";
import { DefaultNavigatorOptions } from "../style";
import { RegisterScreen } from "../screens/Auth/Register.screen";

const Stack = createNativeStackNavigator();
export const AuthNavigator = () => (
  <Stack.Navigator {...DefaultNavigatorOptions}>
    <Stack.Screen
      component={LoginScreen}
      name={Navigation.LOGIN}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      component={RegisterScreen}
      name={Navigation.REGISTER}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);
