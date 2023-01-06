import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Navigation } from "../../../core/navigation";
import HeaderButton from "../../components/design/Button/HeaderButton.design.component";
import { ChatScreen } from "../../screens/Chat/Chat.screen";
import { HomeScreen } from "../../screens/Home/Home.screen";
import { DefaultNavigatorOptions } from "../../style";
import { GetAllSubScreens } from "../subScreens";

const Stack = createNativeStackNavigator();
export const HomeNavigator = ({ navigation }) => (
  <Stack.Navigator {...DefaultNavigatorOptions}>
    <Stack.Screen
      component={HomeScreen}
      name={Navigation.HOME_OVERVIEW}
      options={{
        title: "Home",
        headerRight: () => (
          <HeaderButton
            onPress={() => navigation.navigate(Navigation.CHAT)}
            title="Chat"
            icon="chat"
          />
        ),
      }}
    />
    <Stack.Screen component={ChatScreen} name={Navigation.CHAT} />
    {GetAllSubScreens(Stack, navigation)}
  </Stack.Navigator>
);
