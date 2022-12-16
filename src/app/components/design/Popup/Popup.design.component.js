import { StyleSheet, View } from "react-native";
import Text from "../Text/Text.design.component";
import { Variables } from "../../../style";

export const Popup = ({ text, style }) => {
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Variables.colors.red,
    padding: Variables.sizes.medium,
  },
  text: {
    color: Variables.colors.white,
    textAlign: "center",
  },
});
