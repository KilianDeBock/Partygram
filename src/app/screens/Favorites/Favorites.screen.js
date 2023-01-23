import { PostsGridDesignComponent } from "../../components/design/PostsGrid/PostsGrid.design.component";
import DefaultView from "../../components/design/View/DefaultView.design.component";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getFavorites } from "../../../core/modules/post/api";
import { useState } from "react";
import ListDialog from "../../components/design/Dialog/ListDialog.design.component";
import { updateUserPost } from "../../../core/modules/userPost/api";
import { useAuth } from "../../components/shared/Auth/AuthProvider.shared.component";
import { Text } from "../../components/design";

export const FavoritesScreen = () => {
  const { user } = useAuth();
  const currentUserId = user?.id;
  if (!currentUserId) return null;

  const queryClient = useQueryClient();
  const { data: posts } = useQuery(["favorites"], getFavorites);
  const [deleteItem, setDeleteItem] = useState(null);

  if (!posts || !posts?.data) return null;
  const data = posts.data.map((post) => post.post);

  const handleLongPress = (post) => {
    setDeleteItem(post);
  };

  const handleItemDeletion = async () => {
    setDeleteItem(null);
    await updateUserPost(currentUserId, deleteItem.id, { liked: false });
    await queryClient.invalidateQueries(["favorites"]);
  };

  return (
    <DefaultView padding={false}>
      <Text>TIP: Long press to remove</Text>
      <PostsGridDesignComponent
        posts={data}
        handleLongPress={handleLongPress}
      />
      {deleteItem !== null && (
        <ListDialog onDismiss={() => setDeleteItem(null)}>
          <ListDialog.Button onPress={handleItemDeletion}>
            Remove from favorites
          </ListDialog.Button>
          <ListDialog.Button onPress={() => setDeleteItem(null)}>
            Cancel
          </ListDialog.Button>
        </ListDialog>
      )}
    </DefaultView>
  );
};
