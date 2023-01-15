import { StyleSheet, View } from "react-native";
import { Variables } from "../../../style";

const AvatarBase = ({ style, children }) => {
  return <View style={[styles.container, style]}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    width: 100,
    aspectRatio: 1,
    borderRadius: 100,
    margin: 10,
    backgroundColor: Variables.colors.grayLight,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
});

export default AvatarBase;
