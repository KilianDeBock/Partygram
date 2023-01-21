import { PostsGridDesignComponent } from "../../components/design/PostsGrid/PostsGrid.design.component";
import { ProfileSharedComponent } from "../../components/shared/Profile/Profile.shared.component";
import DefaultView from "../../components/design/View/DefaultView.design.component";
import { getMyPosts } from "../../../core/modules/post/api";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { RefreshControl } from "react-native";

export const ProfileScreen = () => {
  const queryClient = useQueryClient();
  const [refreshing, setRefreshing] = useState(false);
  const { data } = useQuery(["myPosts"], getMyPosts);

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
      <ProfileSharedComponent />
      <PostsGridDesignComponent
        posts={posts}
        addDialog
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </DefaultView>
  );
};
