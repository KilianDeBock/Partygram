import { StyleSheet } from "react-native";
import { DefaultStyles, Variables } from "../../../style";
import Text from "./Text";

const Title = ({ style, children, ...props }) => {
  return (
    <Text style={[styles.title, style]} {...props}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: Variables.textSizes.xl,
  },
});

export default Title;
