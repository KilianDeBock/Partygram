import { FlatList, RefreshControl } from "react-native";
import Divider from "../../design/List/Divider.design.component";
import EmptyView from "../../design/View/EmptyView.design.component";
import { useEffect, useState } from "react";
import { getPosts } from "../../../../core/modules/post/api";
import { PostDesignComponent } from "../../design/Post/Post.design.component";
import { useQueryClient } from "@tanstack/react-query";

export const PostsSharedComponent = ({
  emptyTitle,
  emptyDescription,
  emptyIcon,
  onAddItem,
}) => {
  const queryClient = useQueryClient();
  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState([]);
  const [updating, setUpdating] = useState(false);
  const [lastDataLength, setLastDataLength] = useState(0);
  const [lastHeight, setLastHeight] = useState(0);

  useEffect(() => {
    const setD = async () => {
      const d = await getPosts();
      setData(d.data);
    };
    setD();
  }, []);

  const updateData = (newData) => {
    setLastDataLength(data.length);
    setData([...data, ...newData]);
    setUpdating(false);
  };

  const handleScroll = async (e) => {
    const height = e.nativeEvent.contentSize.height;
    const offset = e.nativeEvent.contentOffset.y;

    if (height - offset <= 2000 && !updating) {
      if (lastHeight === height || lastDataLength === data.length) return;
      setLastHeight(height);
      setUpdating(true);
      const d = await getPosts(data[data.length - 1]);
      updateData(d.data);
    }
  };

  const onRefresh = async () => {
    setRefreshing(true);
    await queryClient.invalidateQueries(["stories"]);
    await queryClient.invalidateQueries(["posts"]);
    const d = await getPosts();
    setData(d.data ?? []);
    setLastHeight(0);
    setLastDataLength(0);
    setRefreshing(false);
  };

  return (
    <>
      {!data || data.length === 0 ? (
        <EmptyView
          title={emptyTitle}
          description={emptyDescription}
          icon={emptyIcon}
          onPress={onAddItem}
        />
      ) : (
        <FlatList
          onScroll={handleScroll}
          ItemSeparatorComponent={() => <Divider />}
          data={data}
          renderItem={({ item }) => <PostDesignComponent item={item} />}
          keyExtractor={(item) => item.id}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        />
      )}
    </>
  );
};
