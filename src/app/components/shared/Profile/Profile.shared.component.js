import { Pressable, StyleSheet, View } from "react-native";
import Text from "../../design/Text/Text.design.component";
import { useEffect, useState } from "react";
import { getMyPosts, getMyStories } from "../../../../core/modules/post/api";
import {
  getMe,
  updateUserProfile,
} from "../../../../core/modules/userProfile/api";
import TextAvatar from "../../design/Avatar/TextAvatar.design.component";
import ImageAvatar from "../../design/Avatar/ImageAvatar.design.component";
import ImagePickerDialog from "../../shared/ImagePicker/ImagePickerDialog.shared.component";
import { useMutation } from "@tanstack/react-query";
import isVoid from "../../../../core/utils/isVoid";

export const ProfileSharedComponent = () => {
  const [data, setData] = useState({
    firstname: "John",
    lastname: "Doe",
    username: "",
    avatar: "",
    posts: "12",
    stories: "3",
  });
  const [addAvatarDialog, setAddAvatarDialog] = useState(false);
  const { mutate, isLoading, isError, error } = useMutation((profile) =>
    updateUserProfile(profile)
  );

  useEffect(() => {
    if (isError) {
      alert(error);
    }
  }, [isError]);

  useEffect(() => {
    const getData = async () => {
      const { data: posts } = await getMyPosts();
      const { data: stories } = await getMyStories();
      const { data: user } = await getMe();

      const profileData = {
        firstname: user.firstname,
        lastname: user.lastname,
        username: user.username,
        avatar: user.avatar,
        posts: posts.length,
        stories: stories.length,
      };
      setData(profileData);
    };
    void getData();
  }, []);

  const handleImage = (base64) => {
    if (!isVoid(base64)) {
      console.log(base64);
      mutate({
        postFile: base64,
      });
    }
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={() => setAddAvatarDialog(true)}>
        {!data.avatar || data.avatar.length < 0 ? (
          <TextAvatar>
            {data.firstname[0]}
            {data.lastname[0]}
          </TextAvatar>
        ) : (
          <ImageAvatar
            source={{
              // Todo make this dynamic
              uri: `https://jvrcjuipyagwvwalcpzo.supabase.co/storage/v1/object/public/avatars/${data.avatar}`,
            }}
          />
        )}
      </Pressable>
      {addAvatarDialog && (
        <ImagePickerDialog
          onDismiss={() => setAddAvatarDialog(false)}
          onImage={handleImage}
        />
      )}
      <View style={styles.content}>
        <View style={styles.stats}>
          <View style={styles.stat}>
            <Text>{data.posts}</Text>
            <Text>Posts</Text>
          </View>
          <View style={styles.stat}>
            <Text>{data.stories}</Text>
            <Text>Stories</Text>
          </View>
        </View>
        <Text style={styles.name}>
          {data.firstname} {data.lastname}
          {data.username && data.username.length > 0 && (
            <Text style={styles.username}> (@{data.username})</Text>
          )}
        </Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  content: {},
  stats: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  stat: {
    marginHorizontal: 15,
    alignItems: "center",
  },
  name: {
    marginLeft: 15,
  },
});
