import { PostsGridDesignComponent } from "../../components/design/PostsGrid/PostsGrid.design.component";
import { ProfileSharedComponent } from "../../components/shared/Profile/Profile.shared.component";
import DefaultView from "../../components/design/View/DefaultView.design.component";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { RefreshControl } from "react-native";
import { getUserPosts } from "../../../core/modules/post/api";

export const ProfileScreen = ({ route, navigation }) => {
  const p = route.params;
  const upload = p?.upload ?? false;
  const userId = p?.profile ?? null;
  const queryPostsString = `userPosts${userId ? `-${userId}` : ""}`;

  const queryClient = useQueryClient();
  const [refreshing, setRefreshing] = useState(false);
  const { data } = useQuery([queryPostsString], () => getUserPosts(userId));

  if (!data || !data?.data || data.error) return null;
  const posts = data?.data;

  const onRefresh = async () => {
    setRefreshing(true);
    await queryClient.invalidateQueries(["users"]);
    await queryClient.invalidateQueries(["users"]);
    await queryClient.invalidateQueries(["myPosts"]);
    await queryClient.invalidateQueries(["myPosts"]);
    setRefreshing(false);
  };

  return (
    <DefaultView padding={false}>
      <ProfileSharedComponent userId={userId} />
      <PostsGridDesignComponent
        openDialog={upload}
        posts={posts}
        addDialog={userId === null}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </DefaultView>
  );
};
