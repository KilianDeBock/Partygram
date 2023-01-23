import { ChatScreen } from "../../screens/Chat/Chat.screen";
import { Navigation } from "../../../core/navigation";
import { StoryScreen } from "../../screens/Home/Story.screen";
import { ProfileScreen } from "../../screens/Profile/Profile.screen";

export const HomeSubScreens = (Stack, navigation) => (
  <>
    <Stack.Screen component={ChatScreen} name={Navigation.CHAT} />
    <Stack.Screen component={StoryScreen} name={Navigation.STORY} />
    <Stack.Screen component={ProfileScreen} name={Navigation.PROFILE_DETAILS} />
  </>
);
