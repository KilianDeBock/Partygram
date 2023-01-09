import { PostsGridDesignComponent } from "../../components/design/PostsGrid/PostsGrid.design.component";
import DefaultView from "../../components/design/View/DefaultView.design.component";

export const SearchScreen = () => {
  return (
    <DefaultView padding={false}>
      <PostsGridDesignComponent posts={["A", "B", "C", "D", "E"]} />
    </DefaultView>
  );
};
