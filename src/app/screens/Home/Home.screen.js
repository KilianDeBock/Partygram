import { PostDesignComponent } from "../../components/design/Post/Post.design.component";
import { StoriesDesignComponent } from "../../components/design/Stories/Stories.design.component";
import DefaultView from "../../components/design/View/DefaultView.design.component";
import DataListView from "../../components/shared/Data/DataListView.shared.component";

export const HomeScreen = () => {
  return (
    <DefaultView padding={false}>
      <StoriesDesignComponent />
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
