import { ProfileScreen } from "../../screens/Profile/Profile.screen";
import { Navigation } from "../../../core/navigation";
import HeaderButton from "../../components/design/Button/HeaderButton.design.component";
import { ProfileSettingsScreen } from "../../screens/Profile/ProfileSettings.screen";

export const ProfileSubScreens = (Stack, navigation) => (
  <>
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
  </>
);
