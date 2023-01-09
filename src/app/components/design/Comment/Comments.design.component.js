import { FlatList, StyleSheet } from "react-native";
import { CommentDesignComponent } from "./Comment.design.component";

export const CommentsDesignComponent = (props) => {
  return (
    <FlatList
      data={["Heye", "Hello", "lolZ"]}
      renderItem={({ item }) => <CommentDesignComponent style={styles.item} />}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    paddingBottom: 10,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
});
