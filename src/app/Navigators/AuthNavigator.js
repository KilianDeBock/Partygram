import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Navigation } from "../../core/navigation";
import { LoginScreen } from "../Screens/Auth/LoginScreen";
import { DefaultNavigatorOptions } from "../style";

const Stack = createNativeStackNavigator();
export const AuthNavigator = () => (
  <Stack.Navigator {...DefaultNavigatorOptions}>
    <Stack.Screen
      component={LoginScreen}
      name={Navigation.LOGIN}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);
