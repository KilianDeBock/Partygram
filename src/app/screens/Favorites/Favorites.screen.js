import { PostsGridDesignComponent } from "../../components/design/PostsGrid/PostsGrid.design.component";
import DefaultView from "../../components/design/View/DefaultView.design.component";
import { useQuery } from "@tanstack/react-query";
import { getFavorites } from "../../../core/modules/post/api";

export const FavoritesScreen = () => {
  const { data: posts } = useQuery(["favorites"], getFavorites);

  if (!posts || !posts?.data) return null;
  const data = posts.data.map((post) => post.post);

  return (
    <DefaultView padding={false}>
      <PostsGridDesignComponent posts={data} />
    </DefaultView>
  );
};
