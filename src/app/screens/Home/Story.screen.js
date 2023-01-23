import DefaultView from "../../components/design/View/DefaultView.design.component";
import { useQuery } from "@tanstack/react-query";
import { getStories } from "../../../core/modules/post/api";
import { Image, StyleSheet, Text } from "react-native";
import { useEffect, useState } from "react";
import { getPublicUrl } from "../../../core/modules/files/utils";
import { Navigation } from "../../../core/navigation";

export const StoryScreen = ({ route, navigation }) => {
  const { index } = route.params;
  const { data } = useQuery(["stories"], getStories);
  const [image, setImage] = useState(null);
  const [timeLeft, setTimeLeft] = useState(5);

  if (!data || !data.data || data.error) return null;

  useEffect(() => {
    let timeout;
    let ind = index ?? 0;
    const nextImage = (item) => {
      const img = { uri: getPublicUrl("posts", item.image) };
      setImage(img);
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
  }, []);

  if (!image) return null;

  return (
    <DefaultView padding={false}>
      <Text>{timeLeft > 5 ? 0 : timeLeft} seconds left!</Text>
      <Image source={image} style={styles.image} />
    </DefaultView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
  },
});
