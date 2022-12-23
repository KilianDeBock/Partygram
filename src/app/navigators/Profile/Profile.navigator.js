import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Navigation } from "../../../core/navigation";
import { ProfileScreen } from "../../screens/Profile/Profile.screen";
import { DefaultNavigatorOptions } from "../../style";
import { GetAllSubScreens } from "../subScreens";

const Stack = createNativeStackNavigator();
export const ProfileNavigator = ({ navigation }) => (
  <Stack.Navigator {...DefaultNavigatorOptions}>
    <Stack.Screen
      component={ProfileScreen}
      name={Navigation.PROFILE_OVERVIEW}
      options={{
        title: "Profile",
      }}
    />
    {GetAllSubScreens(Stack, navigation)}
  </Stack.Navigator>
);
