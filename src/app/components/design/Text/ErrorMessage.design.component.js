import { StyleSheet } from "react-native";
import { Variables } from "../../../style";
import Text from "./Text.design.component";

const ErrorMessage = ({ error }) => {
  if (error) {
    let message = "";
    message = error.message;
    return <Text style={styles.text}>{message}</Text>;
  }
  return null;
};

// todo
const styles = StyleSheet.create({
  text: {
    width: "100%",
    textAlign: "center",
    backgroundColor: Variables.colors.errorLight,
    color: Variables.colors.error,
    padding: Variables.sizes.small,
    borderRadius: Variables.sizes.xs,
    marginBottom: Variables.sizes.medium,
  },
});

export default ErrorMessage;
