import Checkbox from "expo-checkbox";
import { useFormikContext } from "formik";
import * as React from "react";
import { Pressable, Text, View } from "react-native";

const AppCheckboxField = React.forwardRef(({ name, label, ...rest }, ref) => {
  const { values, touched, errors, handleBlur, setFieldValue } =
    useFormikContext();

  const hasError = errors[name] && touched[name];

  return (
    <View style={{ flexDirection: "row", paddingVertical: 10 }}>
      <Checkbox
        ref={ref}
        value={values[name]}
        onValueChange={(text) => setFieldValue(name, text)}
        color={values[name] ? "#4630EB" : undefined}
        {...rest}
      />
      <Pressable onPress={(text) => setFieldValue(name, !values[name])}>
        <Text style={{ marginLeft: 10 }}>{label ?? ""}</Text>
      </Pressable>
    </View>
  );
});

export default AppCheckboxField;
