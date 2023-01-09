import { FlatList, Image, StyleSheet, View } from "react-native";

export const PostsGridDesignComponent = ({ posts }) => {
  return (
    <FlatList
      contentContainerStyle={styles.container}
      data={posts}
      renderItem={({ item }) => (
        <View style={styles.imageView}>
          <Image
            style={styles.image}
            source={{
              uri: "https://cdn.britannica.com/18/137318-050-29F7072E/rooster-Rhode-Island-Red-roosters-chicken-domestication.jpg",
            }}
          />
        </View>
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
});
