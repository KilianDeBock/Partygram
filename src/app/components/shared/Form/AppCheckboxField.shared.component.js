import Checkbox from "expo-checkbox";
import { useFormikContext } from "formik";
import * as React from "react";

const AppCheckboxField = React.forwardRef(({ name, ...rest }, ref) => {
  const { values, touched, errors, handleBlur, setFieldValue } =
    useFormikContext();

  const hasError = errors[name] && touched[name];

  return (
    <Checkbox
      ref={ref}
      value={values[name]}
      onValueChange={(text) => setFieldValue(name, text)}
      color={values[name] ? "#4630EB" : undefined}
      {...rest}
    />
  );
});

export default AppCheckboxField;
