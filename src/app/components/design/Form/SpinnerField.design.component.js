import { StyleSheet } from "react-native";
import React from "react";
import { DefaultStyles, Variables } from "../../../style";
import { Picker } from "@react-native-picker/picker";
import BaseTextField from "./BaseTextField.design.component";

const SpinnerField = React.forwardRef(
  (
    {
      name,
      value,
      label,
      onChange,
      style,
      placeholder,
      items,
      disabled = false,
      error,
      ...rest
    },
    ref
  ) => {
    return (
      <BaseTextField
        label={label}
        style={style}
        backgroundStyle={styles.background}
        error={error}
      >
        <Picker
          selectedValue={value}
          style={styles.input}
          enabled={!disabled}
          onValueChange={onChange}
          dropdownIconColor={Variables.colors.text}
          ref={ref}
          {...rest}
        >
          {items.map((item) => (
            <Picker.Item
              key={item.label}
              label={item.label}
              value={item.value}
            />
          ))}
        </Picker>
      </BaseTextField>
    );
  }
);

const styles = StyleSheet.create({
  background: {
    paddingVertical: 0,
  },
  input: {
    ...DefaultStyles.text,
  },
});

export default SpinnerField;
