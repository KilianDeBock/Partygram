import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Navigation } from "../../core/navigation";
import { SearchScreen } from "../screens/Search/Search.screen";
import { DefaultNavigatorOptions } from "../style";

const Stack = createNativeStackNavigator();
export const SearchNavigator = () => (
    <Stack.Navigator {...DefaultNavigatorOptions}>
        <Stack.Screen
            component={SearchScreen}
            name={Navigation.SEARCH_OVERVIEW}
            options={{
                title: "Search",
            }}
        />
    </Stack.Navigator>
);
