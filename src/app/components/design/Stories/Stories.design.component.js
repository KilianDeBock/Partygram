import { FlatList, StyleSheet, View } from "react-native";
import { StoryDesignComponent } from "./Story.design.component";
import { AddStoryDialog } from "../../shared/AddStoryDialog/AddStoryDialog.shared.component";
import { useEffect, useState } from "react";
import { getStories } from "../../../../core/modules/post/api";

export const StoriesDesignComponent = ({ onAddPost }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const r = await getStories();
      setData(r.data);
    };
    getData();
  }, []);

  if (!data) return null;

  return (
    <View>
      <FlatList
        data={data}
        contentContainerStyle={styles.container}
        horizontal
        renderItem={({ item }) => {
          const image = {
            uri: `https://jvrcjuipyagwvwalcpzo.supabase.co/storage/v1/object/public/posts/${item.image}`,
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
    alignItems: "center",
  },
});
