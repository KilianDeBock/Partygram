import AppForm from "../Form/AppForm";
import { View } from "react-native";
import { useMutation } from "@tanstack/react-query";
import * as yup from "yup";
import ErrorMessage from "../../design/Text/ErrorMessage.design.component";
import AppTextField from "../Form/AppTextField";
import AppSubmitButton from "../Form/AppSubmitButton";

const schema = yup.object().shape({
  name: yup.string().min(2).required(),
});

const defaultValues = {
  name: "",
};

const ClientForm = ({ updateMethod, onSuccess, initialValues = {}, label }) => {
  const { mutate, isLoading, isError, error } = useMutation(updateMethod, {
    onSuccess,
  });

  const handleSubmit = async (values) => {
    mutate(values);
  };

  return (
    <AppForm
      validationSchema={schema}
      initialValues={{ ...defaultValues, ...initialValues }}
      onSubmit={handleSubmit}
    >
      <View>
        {isError && <ErrorMessage error={error} />}
        <AppTextField name="name" label="Client name" disabled={isLoading} />
        <AppSubmitButton disabled={isLoading}>{label}</AppSubmitButton>
      </View>
    </AppForm>
  );
};

export default ClientForm;
