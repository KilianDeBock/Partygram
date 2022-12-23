import { useMutation } from "@tanstack/react-query";
import { View } from "react-native";
import * as yup from "yup";
import ErrorMessage from "../../design/Text/ErrorMessage.design.component";
import AppForm from "../Form/AppForm.shared.component";
import AppSubmitButton from "../Form/AppSubmitButton.shared.component";
import AppTextField from "../Form/AppTextField.shared.component";

const getSchema = (options) => {
  return yup.object().shape({
    email: yup
      .string()
      .email()
      .matches("@(student.|)arteveldehs.be")
      .required(),
    ...(options.showPassword
      ? {
          password: yup.string().min(8).required(),
          password_repeat: yup
            .string()
            .min(8)
            .oneOf([yup.ref("password"), null], "Passwords must match")
            .required(),
        }
      : {}),
    first_name: yup.string().required(),
    last_name: yup.string().required(),
  });
};

const defaultValues = {
  email: "",
  password: "",
  password_repeat: "",
  first_name: "",
  last_name: "",
};

const defaultOptions = {
  showPassword: true,
};

const UserForm = ({
  children,
  initialValues = {},
  onSuccess,
  updateMethod,
  label,
  options = {},
}) => {
  const { mutate, isLoading, isError, error } = useMutation(updateMethod, {
    onSuccess: onSuccess,
  });

  const handleSubmit = async (values) => {
    mutate(values);
  };

  const formOptions = { ...defaultOptions, ...options };

  return (
    <AppForm
      initialValues={{ ...defaultValues, ...initialValues }}
      validationSchema={getSchema(formOptions)}
      onSubmit={handleSubmit}
    >
      <View>
        {isError && <ErrorMessage error={error} />}
        <AppTextField
          name="email"
          label="Email"
          autoComplete="email"
          keyboardType="email-address"
          disabled={isLoading}
        />
        {formOptions.showPassword && (
          <>
            <AppTextField
              name="password"
              label="Password"
              secureTextEntry={true}
              disabled={isLoading}
            />
            <AppTextField
              name="password_repeat"
              label="Repeat Password"
              secureTextEntry={true}
              disabled={isLoading}
            />
          </>
        )}
        <AppTextField
          name="first_name"
          label="First name"
          disabled={isLoading}
        />
        <AppTextField name="last_name" label="Last name" disabled={isLoading} />
        <AppSubmitButton disabled={isLoading}>{label}</AppSubmitButton>
        {children}
      </View>
    </AppForm>
  );
};

export default UserForm;