import DefaultView from "../../components/design/View/DefaultView.design.component";
import { useQuery } from "@tanstack/react-query";
import { getAllStories } from "../../../core/modules/post/api";
import { Image, StyleSheet, Text } from "react-native";
import { useEffect, useState } from "react";
import { getPublicUrl } from "../../../core/modules/files/utils";
import { Navigation } from "../../../core/navigation";

export const StoryScreen = ({ route, navigation }) => {
  const { item: selectItem } = route.params;
  const { data } = useQuery(["allStories"], getAllStories);
  const [item, setItem] = useState(null);
  const [timeLeft, setTimeLeft] = useState(5);

  useEffect(() => {
    if (!data || !data.data || data.error) return () => {};

    console.log(data.data);
    console.log(data.data.length);

    let timeout;
    let ind = selectItem
      ? data.data.findIndex((i) => i.id === selectItem.id) ?? 0
      : 0;
    const nextImage = (item) => {
      const img = { uri: getPublicUrl("posts", item.image) };
      setItem({ ...item, image: img });
      timeout = setTimeout(() => {
        ind += 1;
        if (ind < data.data.length) {
          setTimeLeft(6);
          nextImage(data.data[ind]);
        } else {
          navigation.navigate(Navigation.HOME_OVERVIEW);
        }
      }, 5000);
    };
    nextImage(data.data[ind]);
    const interval = setInterval(() => {
      setTimeLeft((timeLeft) => timeLeft - 1);
    }, 1000);
    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [data]);

  if (!item) return null;
  const user = item.user_profiles;
  const userStories = data.data.filter((i) => i.user_id === user.auth);
  const userStoriesLeft = userStories.filter((i) => i.id <= item.id);

  return (
    <DefaultView padding={false}>
      <Text>
        {timeLeft > 5 ? 0 : timeLeft} seconds left! // {userStoriesLeft.length}/
        {userStories.length} stories left
      </Text>
      <Text>
        Viewing a story from {user.firstname} {user.lastname} ({user.username})
      </Text>
      <Image source={item.image} style={styles.image} />
    </DefaultView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
  },
});
