import { StyleSheet } from "react-native";
import { Variables } from "../../../style";
import Text from "../Text/Text.design.component";

const FieldError = ({ children }) => {
  return <Text style={styles.error}>{children}</Text>;
};

const styles = StyleSheet.create({
  error: {
    color: Variables.colors.error,
    fontSize: Variables.textSizes.small,
    marginTop: Variables.sizes.xxs,
    marginLeft: Variables.sizes.xs,
    textAlign: "left",
    width: "100%",
  },
});

export default FieldError;
