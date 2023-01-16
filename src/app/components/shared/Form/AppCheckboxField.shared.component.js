import Checkbox from "expo-checkbox";
import { useFormikContext } from "formik";
import * as React from "react";
import { Text, View } from "react-native";

const AppCheckboxField = React.forwardRef(({ name, label, ...rest }, ref) => {
  const { values, touched, errors, handleBlur, setFieldValue } =
    useFormikContext();

  const hasError = errors[name] && touched[name];

  return (
    <View style={{ flexDirection: "row" }}>
      <Checkbox
        ref={ref}
        value={values[name]}
        onValueChange={(text) => setFieldValue(name, text)}
        color={values[name] ? "#4630EB" : undefined}
        {...rest}
      />
      <Text style={{ marginLeft: 10 }}>{label ?? ""}</Text>
    </View>
  );
});

export default AppCheckboxField;
