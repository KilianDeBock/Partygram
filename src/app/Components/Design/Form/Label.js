import { StyleSheet } from "react-native";
import { Variables } from "../../../style";
import Text from "../Text/Text";

const Label = ({ children }) => {
  return <Text style={styles.label}>{children}</Text>;
};

const styles = StyleSheet.create({
  label: {
    width: "100%",
    marginLeft: Variables.sizes.xs,
    marginBottom: Variables.sizes.xxs,
  },
});

export default Label;
