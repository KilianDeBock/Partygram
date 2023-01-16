import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Navigation } from "../../../core/navigation";
import { ProfileScreen } from "../../screens/Profile/Profile.screen";
import { DefaultNavigatorOptions } from "../../style";
import { GetAllSubScreens } from "../subScreens";
import { ProfileSettingsScreen } from "../../screens/Profile/ProfileSettings.screen";
import HeaderButton from "../../components/design/Button/HeaderButton.design.component";

const Stack = createNativeStackNavigator();
export const ProfileNavigator = ({ navigation }) => (
  <Stack.Navigator {...DefaultNavigatorOptions}>
    <Stack.Screen
      component={ProfileScreen}
      name={Navigation.PROFILE_OVERVIEW}
      options={{
        title: "Profile",
        headerRight: () => (
          <HeaderButton
            onPress={() => navigation.navigate(Navigation.PROFILE_SETTINGS)}
            title="Profile"
            icon="cog"
          />
        ),
      }}
    />
    <Stack.Screen
      component={ProfileSettingsScreen}
      name={Navigation.PROFILE_SETTINGS}
    />
    {GetAllSubScreens(Stack, navigation)}
  </Stack.Navigator>
);
