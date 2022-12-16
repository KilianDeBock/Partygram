import { StyleSheet, View } from "react-native";
import { Variables } from "../../../style";

const CenteredView = ({ children, style, ...props }) => {
  return (
    <View style={[styles.view, style]} {...props}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: Variables.sizes.xxl,
  },
});

export default CenteredView;
