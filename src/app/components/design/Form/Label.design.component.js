import { StyleSheet } from "react-native";
import { Variables } from "../../../style";
import Text from "../Text/Text.design.component";

const Label = ({ children }) => {
  return <Text style={styles.label}>{children}</Text>;
};

const styles = StyleSheet.create({
  label: {
    width: "100%",
    marginBottom: Variables.sizes.xxs,
  },
});

export default Label;
