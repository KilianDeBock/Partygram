import { Image, StyleSheet, Text, View } from "react-native";

export const CommentDesignComponent = ({ style }) => {
  return (
    <View style={[styles.container, style]}>
      <Image
        style={styles.avatar}
        source={{
          uri: "https://cdn.britannica.com/18/137318-050-29F7072E/rooster-Rhode-Island-Red-roosters-chicken-domestication.jpg",
        }}
      />
      <View style={styles.content}>
        <Text style={styles.username}>Stualyttle</Text>
        <Text style={styles.message}>
          Heye friend! Hows life going? I'm realy missing you... I hope you are
          okay!
          <Text style={styles.hashtags}>#Works</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  content: {
    flex: 1,
  },
  avatar: {
    width: 50,
    aspectRatio: 1,
    borderRadius: 50,
    marginRight: 10,
  },
  username: {
    fontWeight: "bold",
    marginRight: 10,
  },
  message: {
    flex: 1,
  },
  hashtags: {
    color: "blue",
  },
});
