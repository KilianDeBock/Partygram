import * as React from "react";
import { useFormikContext } from "formik";
import TextField from "../../Design/Form/TextField";

const AppTextField = React.forwardRef(({ name, ...rest }, ref) => {
  const { values, touched, errors, handleBlur, setFieldValue } =
    useFormikContext();

  const hasError = errors[name] && touched[name];

  return (
    <TextField
      ref={ref}
      value={values[name]}
      onChangeText={(text) => setFieldValue(name, text)}
      onBlur={handleBlur(name)}
      error={hasError ? errors[name] : ""}
      {...rest}
    />
  );
});

export default AppTextField;
