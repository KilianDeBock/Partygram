import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Navigation } from "../../../core/navigation";
import { SearchScreen } from "../../screens/Search/Search.screen";
import { DefaultNavigatorOptions } from "../../style";
import { GetAllSubScreens } from "../subScreens";

const Stack = createNativeStackNavigator();
export const SearchNavigator = ({ navigation }) => (
  <Stack.Navigator {...DefaultNavigatorOptions}>
    <Stack.Screen
      component={SearchScreen}
      name={Navigation.SEARCH_OVERVIEW}
      options={{
        title: "Search",
      }}
    />
    {GetAllSubScreens(Stack, navigation)}
  </Stack.Navigator>
);
