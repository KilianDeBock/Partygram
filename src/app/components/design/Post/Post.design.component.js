import { Image, StyleSheet, View } from "react-native";
import IconButton from "../Button/IconButton.design.component";
import Text from "../Text/Text.design.component";

export const PostDesignComponent = (props) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: "https://cdn.britannica.com/18/137318-050-29F7072E/rooster-Rhode-Island-Red-roosters-chicken-domestication.jpg",
        }}
      />
      <View style={styles.horizontal}>
        <IconButton icon="heart-outline" />
        <IconButton icon="comment-outline" />
        <View style={styles.divider} />
        <IconButton icon="bookmark-outline" />
      </View>
      <View style={styles.horizontal}>
        <Text>10 likes</Text>
        <View style={styles.divider} />
        <Text>24/10</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: 20,
  },
  image: {
    width: "100%",
    height: 250,
  },
  horizontal: {
    flexDirection: "row",
  },
  divider: {
    flexGrow: 1,
  },
});
