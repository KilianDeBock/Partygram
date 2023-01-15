import { Image, StyleSheet, View } from "react-native";
import IconButton from "../Button/IconButton.design.component";
import { CommentDesignComponent } from "../Comment/Comment.design.component";
import Text from "../Text/Text.design.component";

export const PostDesignComponent = ({ item }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: `https://jvrcjuipyagwvwalcpzo.supabase.co/storage/v1/object/public/posts/${item.image}`,
        }}
      />
      <View style={styles.content}>
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
        <CommentDesignComponent />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: 20,
  },
  content: {
    margin: 10,
  },
  image: {
    width: "100%",
    height: 222,
  },
  horizontal: {
    flexDirection: "row",
  },
  divider: {
    flexGrow: 1,
  },
});
