import { FlatList, Image, Pressable, StyleSheet, View } from "react-native";
import { AddPostDialog } from "../../shared/AddPostDialog/AddPostDialog.shared.component";
import { getPublicUrl } from "../../../../core/modules/files/utils";
import { Navigation } from "../../../../core/navigation";
import { useNavigation } from "@react-navigation/native";

export const PostsGridDesignComponent = ({
  posts,
  refreshControl,
  addDialog = false,
  openDialog = false,
  handleLongPress = (item) => {},
}) => {
  const navigation = useNavigation();
  const list = posts.length < 1 ? [{ id: 0 }] : posts;
  const listEmpty = posts.length < 1;

  return (
    <FlatList
      contentContainerStyle={styles.container}
      data={list}
      renderItem={({ item, index }) => {
        const publicUrl = getPublicUrl("posts", item.image);

        return (
          <>
            {addDialog && index === 0 && (
              <AddPostDialog openDialog={openDialog} />
            )}
            {!listEmpty && (
              <View style={styles.imageView}>
                <Pressable
                  onPress={() =>
                    navigation.navigate(Navigation.PROFILE_DETAILS, {
                      profile: item.user_id,
                    })
                  }
                  onLongPress={() => handleLongPress(item)}
                >
                  <Image
                    style={styles.image}
                    source={{
                      uri: publicUrl,
                    }}
                  />
                </Pressable>
              </View>
            )}
          </>
        );
      }}
      numColumns={3}
      keyExtractor={(item, index) => index.toString()}
      refreshControl={refreshControl}
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
