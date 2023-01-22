import DefaultView from "../../components/design/View/DefaultView.design.component";
import { StoriesSharedComponent } from "../../components/shared/Stories/Stories.shared.component";
import { PostsSharedComponent } from "../../components/shared/Posts/Posts.shared.component";
import { Navigation } from "../../../core/navigation";
import { Button } from "../../components/design";
import { AddPostDialog } from "../../components/shared/AddPostDialog/AddPostDialog.shared.component";
import { useState } from "react";

export const HomeScreen = ({ navigation }) => {
  const [uploadPost, setUploadPost] = useState(false);

  return (
    <DefaultView padding={false}>
      <StoriesSharedComponent />
      <Button onPress={() => setUploadPost(true)}>Upload your post</Button>
      <PostsSharedComponent
        emptyTitle={"No posts"}
        emptyDescription={"You have no posts."}
        emptyIcon="folder"
        onAddItem={() => navigation.navigate(Navigation.PROFILE)}
      />

      {uploadPost && (
        <AddPostDialog
          openDialog={uploadPost}
          onClose={() => setUploadPost(false)}
        />
      )}
    </DefaultView>
  );
};
