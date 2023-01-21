import { PostsGridDesignComponent } from "../../components/design/PostsGrid/PostsGrid.design.component";
import { ProfileSharedComponent } from "../../components/shared/Profile/Profile.shared.component";
import DefaultView from "../../components/design/View/DefaultView.design.component";
import { getMyPosts } from "../../../core/modules/post/api";
import { useQuery } from "@tanstack/react-query";

export const ProfileScreen = () => {
  const { data } = useQuery(["myPosts"], getMyPosts);
  if (!data || !data?.data || data.error) return null;
  const posts = data?.data;

  return (
    <DefaultView padding={false}>
      <ProfileSharedComponent />
      <PostsGridDesignComponent posts={posts} addDialog />
    </DefaultView>
  );
};
