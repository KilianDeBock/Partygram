import { useFormikContext } from "formik";
import * as React from "react";
import { Pressable, Switch, Text, View } from "react-native";
import { Variables } from "../../../style";

export const AppSwitchField = React.forwardRef(
  ({ name, label, ...rest }, ref) => {
    const { values, touched, errors, handleBlur, setFieldValue } =
      useFormikContext();

    const hasError = errors[name] && touched[name];

    return (
      <View style={{ flexDirection: "row", paddingVertical: 10 }}>
        <Switch
          trackColor={{
            false: Variables.colors.gray,
            true: Variables.colors.gray,
          }}
          thumbColor={
            values[name] ? Variables.colors.primary : Variables.colors.secondary
          }
          ios_backgroundColor="#3e3e3e"
          onValueChange={(text) => setFieldValue(name, text)}
          value={values[name]}
        />
        <Pressable onPress={(text) => setFieldValue(name, !values[name])}>
          <Text style={{ marginLeft: 10 }}>{label ?? ""}</Text>
        </Pressable>
      </View>
    );
  }
);
