import { StyleSheet, TextInput as RNTextInput } from "react-native";
import React from "react";
import { DefaultStyles, Variables } from "../../../style";
import BaseTextField from "./BaseTextField.design.component";

const TextField = React.forwardRef(
  (
    {
      name,
      value,
      label,
      onChangeText,
      placeholder,
      style,
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
        <RNTextInput
          style={styles.input}
          value={value}
          editable={!disabled}
          onChangeText={onChangeText}
          ref={ref}
          placeholder={placeholder}
          {...rest}
        />
      </BaseTextField>
    );
  }
);

const styles = StyleSheet.create({
  background: {
    paddingVertical: Variables.sizes.small,
    paddingHorizontal: Variables.sizes.medium,
  },
  input: {
    ...DefaultStyles.text,
  },
});

export default TextField;
