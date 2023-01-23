import DefaultView from "../../components/design/View/DefaultView.design.component";
import { useQuery } from "@tanstack/react-query";
import { getAllStories } from "../../../core/modules/post/api";
import { Image, Pressable, StyleSheet, Text } from "react-native";
import { useEffect, useState } from "react";
import { getPublicUrl } from "../../../core/modules/files/utils";
import { Navigation } from "../../../core/navigation";

export const StoryScreen = ({ route, navigation }) => {
  const { item: selectItem } = route.params;
  const { data } = useQuery(["allStories"], getAllStories);
  const [story, setStory] = useState(null);
  const [timeLeft, setTimeLeft] = useState(5);

  const stories = data?.data ?? [];

  let startIndex =
    selectItem !== undefined && selectItem !== null
      ? stories.findIndex((i) => i.id === selectItem.id) ?? 0
      : 0;

  const [index, setIndex] = useState(startIndex);

  const nextImage = () => {
    const ind = index ?? 0;
    if (ind >= stories.length) {
      return navigation.navigate(Navigation.HOME_OVERVIEW);
    }
    const newStory = stories[ind];
    const img = { uri: getPublicUrl("posts", newStory.image) };
    setStory({ ...newStory, image: img });
    setIndex(ind + 1);
  };

  useEffect(() => {
    if (!data || !stories || stories.length < 1 || data.error) return () => {};

    setTimeLeft(5);
    const timeout = setTimeout(() => {
      if (index < stories.length) {
        nextImage(stories[index]);
      } else {
        navigation.navigate(Navigation.HOME_OVERVIEW);
      }
    }, 5000);

    const interval = setInterval(() => {
      setTimeLeft((timeLeft) => timeLeft - 1);
    }, 1000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [index]);

  useEffect(() => {
    if (!data || !stories || stories.length < 1 || data.error) return () => {};

    nextImage();
  }, [data]);

  if (!story) return null;
  const user = story.user_profiles;
  const userStories = stories.filter((i) => i.user_id === user.auth);
  const userStoriesLeft = userStories.filter((i) => i.id <= story.id);

  return (
    <DefaultView padding={false}>
      <Pressable onPress={nextImage}>
        <Text>{timeLeft > 5 ? 0 : timeLeft} seconds left!</Text>
        <Text>
          Viewing a story from {user.firstname} {user.lastname} ({user.username}
          ) ({userStoriesLeft.length}/{userStories.length})
        </Text>
        <Image source={story.image} style={styles.image} />
      </Pressable>
    </DefaultView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
  },
});
