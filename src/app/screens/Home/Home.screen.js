import { PostDesignComponent } from "../../components/design/Post/Post.design.component";
import DefaultView from "../../components/design/View/DefaultView.design.component";
import DataListView from "../../components/shared/Data/DataListView.shared.component";
import { useEffect } from "react";
import { StoriesDesignComponent } from "../../components/design/Stories/Stories.design.component";
import { getPosts } from "../../../core/modules/post/api";

export const HomeScreen = () => {
  useEffect(() => {
    const getData = async () => {
      // const r = await getPostById(3);
      // const r = await getPosts();
      // console.log(r);
    };
    getData();
  });

  return (
    <DefaultView padding={false}>
      <StoriesDesignComponent />
      <DataListView
        name={["posts"]}
        method={getPosts}
        emptyTitle={"No posts"}
        emptyDescription={"You have no posts."}
        emptyIcon="folder"
        renderItem={({ item }) => <PostDesignComponent item={item} />}
      />
    </DefaultView>
  );
};
