import DefaultView from "../../components/design/View/DefaultView.design.component";
import { StoriesSharedComponent } from "../../components/shared/Stories/Stories.shared.component";
import { PostsSharedComponent } from "../../components/shared/Posts/Posts.shared.component";
import { Navigation } from "../../../core/navigation";
import { Button } from "../../components/design";

export const HomeScreen = ({ navigation }) => {
  return (
    <DefaultView padding={false}>
      <StoriesSharedComponent />
      <Button
        onPress={() =>
          navigation.navigate(Navigation.PROFILE_OVERVIEW, { upload: true })
        }
      >
        Upload your post
      </Button>
      <PostsSharedComponent
        emptyTitle={"No posts"}
        emptyDescription={"You have no posts."}
        emptyIcon="folder"
        onAddItem={() => navigation.navigate(Navigation.PROFILE)}
      />
    </DefaultView>
  );
};
