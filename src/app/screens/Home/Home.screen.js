import { View } from "react-native";
import { PostDesignComponent } from "../../components/design/Post/Post.design.component";
import Text from "../../components/design/Text/Text.design.component";

export const HomeScreen = () => {
  return (
    <View>
      <PostDesignComponent />
      <Text>Home Screen</Text>
    </View>
  );
};
