import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { DefaultNavigatorOptions } from "../../style";
import { GetAllSubScreens } from "../subScreens";

const Stack = createNativeStackNavigator();
export const FavoritesNavigator = ({ navigation }) => (
  <Stack.Navigator {...DefaultNavigatorOptions}>
    {GetAllSubScreens(Stack, navigation)}
  </Stack.Navigator>
);
