import { PostDesignComponent } from "../../components/design/Post/Post.design.component";
import DefaultView from "../../components/design/View/DefaultView.design.component";
import DataListView from "../../components/shared/Data/DataListView.shared.component";
import { StoriesSharedComponent } from "../../components/shared/Stories/Stories.shared.component";
import { getPosts } from "../../../core/modules/post/api";
import { Navigation } from "../../../core/navigation";
import { RefreshControl } from "react-native";
import { useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

export const HomeScreen = ({ navigation }) => {
  const queryClient = useQueryClient();
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = async () => {
    setRefreshing(true);
    await queryClient.invalidateQueries(["stories"]);
    await queryClient.invalidateQueries(["posts"]);
    setRefreshing(false);
  };
  return (
    <DefaultView padding={false}>
      <StoriesSharedComponent />
      <DataListView
        name={["posts"]}
        method={getPosts}
        emptyTitle={"No posts"}
        emptyDescription={"You have no posts."}
        emptyIcon="folder"
        onAddItem={() => navigation.navigate(Navigation.PROFILE)}
        renderItem={({ item }) => <PostDesignComponent item={item} />}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </DefaultView>
  );
};
