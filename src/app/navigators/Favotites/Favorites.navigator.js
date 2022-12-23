import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Navigation } from "../../../core/navigation";
import { FavoritesScreen } from "../../screens/Favorites/Favorites.screen";
import { DefaultNavigatorOptions } from "../../style";
import { GetAllSubScreens } from "../subScreens";

const Stack = createNativeStackNavigator();
export const FavoritesNavigator = ({ navigation }) => (
  <Stack.Navigator {...DefaultNavigatorOptions}>
    <Stack.Screen
      component={FavoritesScreen}
      name={Navigation.FAVORITES_OVERVIEW}
      options={{
        title: "Favorites",
      }}
    />
    {GetAllSubScreens(Stack, navigation)}
  </Stack.Navigator>
);
