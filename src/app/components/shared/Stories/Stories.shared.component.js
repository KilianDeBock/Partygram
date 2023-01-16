import { FlatList, StyleSheet, View } from "react-native";
import { StoryDesignComponent } from "../../design/Stories/Story.design.component";
import { AddStoryDialog } from "../AddStoryDialog/AddStoryDialog.shared.component";
import { getStories } from "../../../../core/modules/post/api";
import { useQuery } from "@tanstack/react-query";
import { getPublicUrl } from "../../../../core/modules/files/utils";

export const StoriesSharedComponent = ({ onAddPost }) => {
  const { data } = useQuery(["stories"], getStories);
  if (!data || !data.data || data.error) return null;

  return (
    <View>
      <FlatList
        data={data.data}
        contentContainerStyle={styles.container}
        horizontal
        renderItem={({ item }) => {
          const publicUrl = getPublicUrl("posts", item.image);

          const image = {
            uri: publicUrl,
          };
          return <StoryDesignComponent image={image} />;
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
