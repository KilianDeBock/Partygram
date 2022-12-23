import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Navigation } from "../../core/navigation";
import { HomeScreen } from "../screens/Home/Home.screen";
import { DefaultNavigatorOptions } from "../style";

const Stack = createNativeStackNavigator();
export const HomeNavigator = () => (
    <Stack.Navigator {...DefaultNavigatorOptions}>
        <Stack.Screen
            component={HomeScreen}
            name={Navigation.HOME_OVERVIEW}
            options={{
                title: "Home",
            }}
        />
    </Stack.Navigator>
);
