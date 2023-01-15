import TextField from "../../components/design/Form/TextField.design.component";
import { PostsGridDesignComponent } from "../../components/design/PostsGrid/PostsGrid.design.component";
import DefaultView from "../../components/design/View/DefaultView.design.component";
import { useState } from "react";
import { searchPosts } from "../../../core/modules/post/api";

export const SearchScreen = () => {
  const [cooldown, setCooldown] = useState(null);
  const [posts, setPosts] = useState([]);

  const search = async (search) => {
    // Search
    const p = await searchPosts(search);
    setPosts(p);
  };

  const handleOnChangeText = (text) => {
    // Clear the timeout if it exists
    if (cooldown) {
      clearTimeout(cooldown);
      setCooldown(null);
    }

    // Check if the length is greater than 3
    if (text.length < 3) return;

    // Set a timeout to search
    setCooldown(setTimeout(() => search(text), 500));
  };

  return (
    <DefaultView padding={false}>
      <TextField onChangeText={handleOnChangeText} placeholder={"#hello"} />
      <PostsGridDesignComponent posts={posts} />
    </DefaultView>
  );
};
