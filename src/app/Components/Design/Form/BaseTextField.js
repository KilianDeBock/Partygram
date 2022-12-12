import { StyleSheet, View } from "react-native";
import isVoid from "../../../../core/utils/isVoid";
import { DefaultStyles, Variables } from "../../../style";
import FieldError from "./FieldError";
import Label from "./Label";

const BaseTextField = ({ style, backgroundStyle, label, error, children }) => {
  return (
    <View style={[styles.container, style]}>
      {label && <Label>{label}</Label>}
      <View
        style={[
          styles.background,
          backgroundStyle,
          !isVoid(error) && styles.backgroundError,
        ]}
      >
        {children}
      </View>
      {!isVoid(error) && <FieldError type="error">{error}</FieldError>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginBottom: Variables.sizes.small,
  },
  background: {
    width: "100%",
    backgroundColor: Variables.colors.white,
    paddingVertical: Variables.sizes.small,
    paddingHorizontal: Variables.sizes.medium,
    borderRadius: Variables.sizes.xs,
    borderWidth: 1,
    borderColor: Variables.colors.white,
  },
  backgroundError: {
    borderColor: Variables.colors.error,
  },
  input: {
    ...DefaultStyles.text,
  },
});

export default BaseTextField;
