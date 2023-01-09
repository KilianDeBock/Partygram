import { Image, Pressable, StyleSheet } from "react-native";

export const StoryDesignComponent = ({ image, onPress, title }) => {
  return (
    <Pressable
      accessibilityLabel={title}
      onPress={onPress}
      android_ripple={{ borderless: true }}
      style={styles.container}
    >
      <Image source={image} style={styles.image} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
    marginTop: 10,
  },
  image: {
    width: 50,
    aspectRatio: 1,
    borderRadius: 50,
    marginLeft: 5,
  },
});
