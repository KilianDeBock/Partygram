import { Image, StyleSheet } from "react-native";
import AvatarBase from "./AvatarBase.design.component";

const ImageAvatar = ({ style, source }) => {
  return (
    <AvatarBase style={style}>
      <Image style={styles.image} source={source} resizeMode="cover" />
    </AvatarBase>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
});

export default ImageAvatar;
