import { FlatList, StyleSheet, View } from "react-native";
import { StoryDesignComponent } from "../../design/Stories/Story.design.component";
import { AddStoryDialog } from "../AddStoryDialog/AddStoryDialog.shared.component";
import { getStories } from "../../../../core/modules/post/api";
import { useQuery } from "@tanstack/react-query";
import { getPublicUrl } from "../../../../core/modules/files/utils";
import { Navigation } from "../../../../core/navigation";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../Auth/AuthProvider.shared.component";

export const StoriesSharedComponent = ({ onAddPost }) => {
  const { settings } = useAuth();
  if (!settings.showStories) return null;

  const navigation = useNavigation();
  const { data } = useQuery(["stories"], getStories);
  if (!data || !data.data || data.error) return null;

  return (
    <View>
      <FlatList
        data={data.data}
        contentContainerStyle={styles.container}
        horizontal
        renderItem={({ item, index }) => {
          const publicUrl = getPublicUrl("posts", item.image);

          const image = {
            uri: publicUrl,
          };
          return (
            <StoryDesignComponent
              image={image}
              onPress={() => navigation.navigate(Navigation.STORY, { item })}
            />
          );
        }}
        ListHeaderComponent={() => <AddStoryDialog />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 80,
    alignItems: "center",
  },
});
