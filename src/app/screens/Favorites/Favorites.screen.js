import { PostDesignComponent } from "../../components/design/Post/Post.design.component";
import DefaultView from "../../components/design/View/DefaultView.design.component";
import DataListView from "../../components/shared/Data/DataListView.shared.component";

export const FavoritesScreen = () => {
  return (
    <DefaultView padding={false}>
      <DataListView
        name={["posts"]}
        method={() => ({ data: ["1", "2", "3", "4", "5"] })}
        emptyTitle={"No posts"}
        emptyDescription={"You have no posts."}
        emptyIcon="folder"
        renderItem={({ item }) => <PostDesignComponent />}
      />
    </DefaultView>
  );
};
