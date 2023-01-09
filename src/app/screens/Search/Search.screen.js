import TextField from "../../components/design/Form/TextField.design.component";
import { PostsGridDesignComponent } from "../../components/design/PostsGrid/PostsGrid.design.component";
import DefaultView from "../../components/design/View/DefaultView.design.component";

export const SearchScreen = () => {
  const handleOnChangeText = (text) => {
    if (text.length < 3) return;
    console.log(text);
  };
  return (
    <DefaultView padding={false}>
      <TextField onChangeText={handleOnChangeText} placeholder={"#hello"} />
      <PostsGridDesignComponent posts={["A", "B", "C", "D", "E"]} />
    </DefaultView>
  );
};
