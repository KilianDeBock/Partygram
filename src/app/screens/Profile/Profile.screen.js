import { PostsGridDesignComponent } from "../../components/design/PostsGrid/PostsGrid.design.component";
import { ProfileDesignComponent } from "../../components/design/Profile/Profile.design.component";
import DefaultView from "../../components/design/View/DefaultView.design.component";
import { getMyPosts } from "../../../core/modules/post/api";
import { useEffect, useState } from "react";

export const ProfileScreen = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const r = await getMyPosts();
      setData(r.data);
    };
    void getData();
  }, []);

  if (!data || data.length < 1) return null;

  return (
    <DefaultView padding={false}>
      <ProfileDesignComponent />
      <PostsGridDesignComponent posts={data} addDialog />
    </DefaultView>
  );
};
