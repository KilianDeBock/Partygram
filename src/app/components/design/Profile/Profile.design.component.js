import { Image, StyleSheet, View } from "react-native";
import Text from "../Text/Text.design.component";

export const ProfileDesignComponent = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: "https://cdn.britannica.com/18/137318-050-29F7072E/rooster-Rhode-Island-Red-roosters-chicken-domestication.jpg",
        }}
      />
      <View style={styles.content}>
        <View style={styles.stats}>
          <View style={styles.stat}>
            <Text>10</Text>
            <Text>Posts</Text>
          </View>
          <View style={styles.stat}>
            <Text>20</Text>
            <Text>Stories</Text>
          </View>
        </View>
        <Text style={styles.name}>Firstname Lastname</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 100,
    aspectRatio: 1,
    borderRadius: 100,
    margin: 10,
  },
  content: {},
  stats: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  stat: {
    marginHorizontal: 15,
    alignItems: "center",
  },
  name: {
    marginLeft: 15,
  },
});
