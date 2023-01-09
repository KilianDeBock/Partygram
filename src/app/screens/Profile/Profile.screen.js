import { PostsGridDesignComponent } from "../../components/design/PostsGrid/PostsGrid.design.component";
import { ProfileDesignComponent } from "../../components/design/Profile/Profile.design.component";
import DefaultView from "../../components/design/View/DefaultView.design.component";

export const ProfileScreen = () => {
  return (
    <DefaultView padding={false}>
      <ProfileDesignComponent />
      <PostsGridDesignComponent posts={["A", "B", "C", "D", "E"]} />
    </DefaultView>
  );
};
