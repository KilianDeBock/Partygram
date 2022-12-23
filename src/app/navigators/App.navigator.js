import Icons from "@expo/vector-icons/MaterialCommunityIcons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Navigation } from "../../core/navigation";
import { DefaultNavigatorOptions, Variables } from "../style";
import { FavoritesNavigator } from "./Favorites.navigator";
import { HomeNavigator } from "./Home.navigator";
import { ProfileNavigator } from "./Profile.navigator";
import { SearchNavigator } from "./Search.navigator";

const getTabIcon = (name, focused) => {
  let icon;
  const iconsWithoutOutline = ["magnify"];
  switch (name) {
    case Navigation.HOME:
      icon = "home";
      break;
    case Navigation.CHAT:
      icon = "ballot";
      break;
    case Navigation.FAVORITES:
      icon = "star";
      break;
    case Navigation.PROFILE:
      icon = "cog";
      break;
    case Navigation.SEARCH:
      icon = "magnify";
      break;
    default:
      icon = "folder";
  }

  return focused || iconsWithoutOutline.includes(icon)
    ? icon
    : `${icon}-outline`;
};

export const AppNavigator = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => (
          <Icons
            name={getTabIcon(route.name, focused)}
            size={size}
            color={color}
          />
        ),
        tabBarActiveTintColor: Variables.colors.secondary,
        tabBarInactiveTintColor: Variables.colors.gray,
        ...DefaultNavigatorOptions.screenOptions,
      })}
    >
      <Tab.Screen
        component={HomeNavigator}
        name={Navigation.HOME}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        component={SearchNavigator}
        name={Navigation.SEARCH}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        component={FavoritesNavigator}
        name={Navigation.FAVORITES}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        component={ProfileNavigator}
        name={Navigation.PROFILE}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};
