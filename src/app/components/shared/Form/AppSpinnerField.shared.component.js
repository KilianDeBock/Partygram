import { useFormikContext } from "formik";
import React, { useEffect } from "react";
import isVoid from "../../../../core/utils/isVoid";
import SpinnerField from "../../design/Form/SpinnerField.design.component";

const AppSpinnerField = ({ name, items, ...rest }) => {
  const { values, touched, errors, handleBlur, setFieldValue } =
    useFormikContext();
  const hasError = errors[name] && touched[name];
  const value = values[name];

  // if no item is set, set the first item
  useEffect(() => {
    if (isVoid(value)) {
      setFieldValue(name, items[0].value);
    }
  }, [value]);

  return (
    <SpinnerField
      value={value}
      onChange={(value) => setFieldValue(name, value)}
      onBlur={handleBlur(name)}
      items={items}
      error={hasError ? errors[name] : ""}
      {...rest}
    />
  );
};

export default AppSpinnerField;
