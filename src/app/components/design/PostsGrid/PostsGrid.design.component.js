import { FlatList, Image, StyleSheet, View } from "react-native";
import { AddPostDialog } from "../../shared/AddPostDialog/AddPostDialog.shared.component";

export const PostsGridDesignComponent = ({ posts, addDialog = false }) => {
  const list = posts.length < 1 ? [{ id: 0 }] : posts;
  const listEmpty = posts.length < 1;

  return (
    <FlatList
      contentContainerStyle={styles.container}
      data={list}
      renderItem={({ item, index }) => (
        <>
          {addDialog && index === 0 && <AddPostDialog />}
          {!listEmpty && (
            <View style={styles.imageView}>
              <Image
                style={styles.image}
                source={{
                  uri: `https://jvrcjuipyagwvwalcpzo.supabase.co/storage/v1/object/public/posts/${item.image}`,
                }}
              />
            </View>
          )}
        </>
      )}
      numColumns={3}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginTop: 5,
  },
  image: {
    aspectRatio: 1,
  },
  imageView: {
    width: "31.6%",
    marginLeft: 5,
    marginBottom: 5,
  },
  pressView: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e0e0e0",
  },
});
