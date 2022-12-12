import { StyleSheet, Text as RNText } from "react-native";
import { DefaultStyles, Variables } from "../../../style";

const Text = ({ children, color = "default", style, ...props }) => {
  const dynamicStyle = {
    color:
      color === "light" ? Variables.colors.lightText : Variables.colors.text,
  };

  return (
    <RNText style={[styles.text, dynamicStyle, style]} {...props}>
      {children}
    </RNText>
  );
};

const styles = StyleSheet.create({
  text: {
    ...DefaultStyles.text,
    fontSize: Variables.textSizes.default,
  },
});

export default Text;
