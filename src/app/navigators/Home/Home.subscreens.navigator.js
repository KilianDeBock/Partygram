import { ChatScreen } from "../../screens/Chat/Chat.screen";
import { Navigation } from "../../../core/navigation";
import { StoryScreen } from "../../screens/Home/Story.screen";
import { HomeScreen } from "../../screens/Home/Home.screen";
import HeaderButton from "../../components/design/Button/HeaderButton.design.component";

export const HomeSubScreens = (Stack, navigation) => (
  <>
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
    <Stack.Screen component={StoryScreen} name={Navigation.STORY} />
  </>
);
