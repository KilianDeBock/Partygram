import { FlatList, StyleSheet } from "react-native";
import IconButton from "../Button/IconButton.design.component";
import { StoryDesignComponent } from "./Story.design.component";

export const StoriesDesignComponent = ({ data }) => {
  const image = {
    uri: "https://cdn.britannica.com/18/137318-050-29F7072E/rooster-Rhode-Island-Red-roosters-chicken-domestication.jpg",
  };
  return (
    <FlatList
      data={["1", "2", "3", "4"]}
      contentContainerStyle={styles.container}
      horizontal
      renderItem={({ item }) => <StoryDesignComponent image={image} />}
      ListHeaderComponent={() => <IconButton size={40} icon="plus" />}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
});
