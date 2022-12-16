import { StyleSheet, View } from "react-native";
import { Variables } from "../../../style";

const DefaultView = ({ style, padding = true, children, ...props }) => {
  return (
    <View
      style={[styles.view, padding && styles.viewPadding, style]}
      {...props}
    >
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
  viewPadding: {
    paddingVertical: Variables.sizes.xl,
    paddingHorizontal: Variables.sizes.horizontalPadding,
  },
});

export default DefaultView;
