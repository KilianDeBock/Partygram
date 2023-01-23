import { Image, Pressable, StyleSheet, View } from "react-native";
import IconButton from "../Button/IconButton.design.component";
import { CommentDesignComponent } from "../Comment/Comment.design.component";
import Text from "../Text/Text.design.component";
import { getLikes } from "../../../../core/modules/post/api";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { updateUserPost } from "../../../../core/modules/userPost/api";
import { useNavigation } from "@react-navigation/native";
import { Navigation } from "../../../../core/navigation";

export const PostDesignComponent = ({
  item,
  onLike = () => {},
  onComment = () => {},
  onBookmark = () => {},
  currentUserId = 0,
}) => {
  const navigation = useNavigation();
  const queryClient = useQueryClient();
  const queryLikesString = `postLikes${item.id}`;
  const queryCommentsString = `postComments${item.id}`;
  const { data: likesData } = useQuery([queryLikesString], () =>
    getLikes(item.id)
  );
  const likes = likesData?.data?.length || 0;
  const iLiked = likesData?.data?.find(
    (like) => like.user_id === currentUserId
  );

  const date = new Date(item.created_at);
  const month = date.getMonth() + 1;
  const dateString = `${date.getDate()}/${month < 10 ? "0" + month : month}`;

  const _onLike = async () => {
    await onLike(item.id);
    if (!!iLiked) {
      await updateUserPost(currentUserId, item.id, { liked: false });
    } else {
      await updateUserPost(currentUserId, item.id, { liked: true });
    }
    await queryClient.invalidateQueries([queryLikesString]);
    await queryClient.invalidateQueries(["favorites"]);
  };

  const _onComment = () => {
    queryClient.invalidateQueries([queryCommentsString]);
    onComment(item.id);
  };

  const _onBookmark = () => {
    onBookmark(item.id);
  };

  return (
    <View style={styles.container}>
      <Pressable
        onPress={() =>
          navigation.navigate(Navigation.PROFILE_DETAILS, {
            profile: item.user_id,
          })
        }
      >
        <View style={styles.line}></View>
        <View>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.description}>{item.description}</Text>
        </View>
        <Image
          style={styles.image}
          source={{
            uri: `https://jvrcjuipyagwvwalcpzo.supabase.co/storage/v1/object/public/posts/${item.image}`,
          }}
        />
        <View style={styles.content}>
          <View style={styles.horizontal}>
            <IconButton
              icon={`heart${!iLiked ? "-outline" : ""}`}
              onPress={_onLike}
            />
            <IconButton icon="comment-outline" onPress={_onComment} />
            <View style={styles.divider} />
            <IconButton icon="bookmark-outline" onPress={_onBookmark} />
          </View>
          <View style={styles.horizontal}>
            <Text>{likes} likes</Text>
            <View style={styles.divider} />
            <Text>{dateString}</Text>
          </View>
          <CommentDesignComponent />
        </View>
      </Pressable>
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
  title: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  description: {
    textAlign: "center",
    marginBottom: 10,
  },
  line: {
    height: 1,
    backgroundColor: "#e0e0e0",
    marginVertical: 10,
  },
});
