import Icons from "@expo/vector-icons/MaterialCommunityIcons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Navigation } from "../../../core/navigation";
import { DefaultNavigatorOptions, Variables } from "../../style";
import { GetAllNavigators } from "../navigators";

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

export const AppNavigator = ({ navigation }) => {
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
      {GetAllNavigators(Tab, navigation)}
    </Tab.Navigator>
  );
};
