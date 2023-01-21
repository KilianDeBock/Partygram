import { ChatScreen } from "../../screens/Chat/Chat.screen";
import { Navigation } from "../../../core/navigation";
import { StoryScreen } from "../../screens/Home/Story.screen";

export const HomeSubScreens = (Stack, navigation) => (
  <>
    <Stack.Screen component={ChatScreen} name={Navigation.CHAT} />
    <Stack.Screen component={StoryScreen} name={Navigation.STORY} />
  </>
);
