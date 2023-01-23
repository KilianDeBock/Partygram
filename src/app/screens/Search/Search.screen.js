import TextField from "../../components/design/Form/TextField.design.component";
import { PostsGridDesignComponent } from "../../components/design/PostsGrid/PostsGrid.design.component";
import DefaultView from "../../components/design/View/DefaultView.design.component";
import { useEffect, useState } from "react";
import { searchPosts } from "../../../core/modules/post/api";

export const SearchScreen = () => {
  const [text, setText] = useState(null);
  const [posts, setPosts] = useState([]);

  const search = async (search) => {
    if (!search || search.length < 3) return setPosts([]);
    const p = await searchPosts(search);
    setPosts(p);
  };

  useEffect(() => {
    const id = setTimeout(() => search(text), 500);
    return () => clearTimeout(id);
  }, [text]);

  return (
    <DefaultView padding={false}>
      <TextField onChangeText={setText} placeholder={"#hello"} />
      <PostsGridDesignComponent posts={posts} />
    </DefaultView>
  );
};
