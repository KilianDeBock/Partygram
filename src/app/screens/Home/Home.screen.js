import { PostDesignComponent } from "../../components/design/Post/Post.design.component";
import DefaultView from "../../components/design/View/DefaultView.design.component";
import DataListView from "../../components/shared/Data/DataListView.shared.component";
import { StoriesDesignComponent } from "../../components/design/Stories/Stories.design.component";
import { getPosts } from "../../../core/modules/post/api";
import { Navigation } from "../../../core/navigation";

export const HomeScreen = ({ navigation }) => {
  return (
    <DefaultView padding={false}>
      <StoriesDesignComponent />
      <DataListView
        name={["posts"]}
        method={getPosts}
        emptyTitle={"No posts"}
        emptyDescription={"You have no posts."}
        emptyIcon="folder"
        onAddItem={() => navigation.navigate(Navigation.PROFILE)}
        renderItem={({ item }) => <PostDesignComponent item={item} />}
      />
    </DefaultView>
  );
};
