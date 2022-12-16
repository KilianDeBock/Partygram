import { useFormikContext } from "formik";
import { StyleSheet } from "react-native";
import { Variables } from "../../../style";
import Button from "../../design/Button/Button.design.component";

const AppSubmitButton = ({ style, disabled, children }) => {
  const { handleSubmit, isValid } = useFormikContext();

  return (
    <Button
      style={[styles.button, style]}
      onPress={handleSubmit}
      disabled={disabled || !isValid}
    >
      {children}
    </Button>
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop: Variables.sizes.xs,
    width: "100%",
  },
});

export default AppSubmitButton;
