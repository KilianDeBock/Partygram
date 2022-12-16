import { StyleSheet } from "react-native";
import { Variables } from "../../../style";
import Text from "./Text.design.component";

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
