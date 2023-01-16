import { FlatList, StyleSheet, View } from "react-native";
import { StoryDesignComponent } from "../../design/Stories/Story.design.component";
import { AddStoryDialog } from "../AddStoryDialog/AddStoryDialog.shared.component";
import { useEffect, useState } from "react";
import { getStories } from "../../../../core/modules/post/api";
import { supabase } from "../../../../core/api/supabase";

export const StoriesSharedComponent = ({ onAddPost }) => {
  const [data, setData] = useState(null);

  // Todo get data the right way!
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
          const publicUrl = supabase.storage
            .from("posts")
            .getPublicUrl(item.image).data.publicUrl;

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
