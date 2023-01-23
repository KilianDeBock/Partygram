import { Pressable, StyleSheet, View } from "react-native";
import Text from "../../design/Text/Text.design.component";
import { useEffect, useState } from "react";
import {
  getFullProfile,
  updateUserProfile,
} from "../../../../core/modules/userProfile/api";
import TextAvatar from "../../design/Avatar/TextAvatar.design.component";
import ImageAvatar from "../../design/Avatar/ImageAvatar.design.component";
import ImagePickerDialog from "../../shared/ImagePicker/ImagePickerDialog.shared.component";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import isVoid from "../../../../core/utils/isVoid";
import { getPublicUrl } from "../../../../core/modules/files/utils";

export const ProfileSharedComponent = ({ userId }) => {
  const queryProfileString = `profile${userId ? `-${userId}` : ""}`;
  const queryClient = useQueryClient();
  const [refreshing, setRefreshing] = useState(false);
  const { data } = useQuery([queryProfileString], () => getFullProfile(userId));

  const [addAvatarDialog, setAddAvatarDialog] = useState(false);
  const { mutate, isLoading, isError, error } = useMutation(
    (profile) => updateUserProfile(profile),
    {
      onSuccess: () => queryClient.invalidateQueries(["profile"]),
    }
  );

  useEffect(() => {
    if (isError) {
      alert(error);
    }
  }, [isError]);

  const userData = data?.data ?? null;
  const user = userData
    ? {
        firstname: userData.firstname,
        lastname: userData.lastname,
        username: userData.username,
        avatar: userData.avatar,
        posts: userData.posts?.filter((p) => !p.story).length ?? 0,
        stories: userData.posts?.filter((p) => !!p.story).length ?? 0,
      }
    : {
        firstname: "John",
        lastname: "Doe",
        username: "",
        avatar: "",
        posts: "12",
        stories: "3",
      };

  const publicUrl = getPublicUrl("avatars", user.avatar);

  const handleImage = (base64) => {
    if (!isVoid(base64)) {
      mutate({
        postFile: base64,
      });
    }
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={() => setAddAvatarDialog(true)}>
        {!user.avatar || user.avatar.length < 0 ? (
          <TextAvatar>
            {user.firstname[0]}
            {user.lastname[0]}
          </TextAvatar>
        ) : (
          <ImageAvatar
            source={{
              uri: publicUrl,
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
            <Text>{user.posts}</Text>
            <Text>Posts</Text>
          </View>
          <View style={styles.stat}>
            <Text>{user.stories}</Text>
            <Text>Stories</Text>
          </View>
        </View>
        <Text style={styles.name}>
          {user.firstname} {user.lastname}
          {user.username && user.username.length > 0 && (
            <Text style={styles.username}> (@{user.username})</Text>
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
