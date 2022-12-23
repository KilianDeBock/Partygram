import { useMutation } from "@tanstack/react-query";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import * as yup from "yup";
import { login } from "../../../core/modules/auth/api";
import { Navigation } from "../../../core/navigation";
import TextButton from "../../components/design/Button/TextButton.design.component";
import ErrorMessage from "../../components/design/Text/ErrorMessage.design.component";
import Title from "../../components/design/Text/Title.design.component";
import DefaultView from "../../components/design/View/DefaultView.design.component";
import AppForm from "../../components/shared/Form/AppForm.shared.component";
import AppSubmitButton from "../../components/shared/Form/AppSubmitButton.shared.component";
import AppTextField from "../../components/shared/Form/AppTextField.shared.component";
import { Variables } from "../../style";

const schema = yup.object().shape({
  email: yup.string().email().matches("@(student.|)arteveldehs.be").required(),
  password: yup.string().required(),
});

export const LoginScreen = ({ navigation }) => {
  const { mutate, isLoading, isError, error } = useMutation(login);

  const handleSubmit = async (values) => {
    mutate(values);
  };

  const handleRegisterPress = () => {
    navigation.navigate(Navigation.REGISTER);
  };

  return (
    <>
      <AppForm
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <DefaultView style={styles.container}>
          <Title style={styles.title}>Login</Title>
          {isError && <ErrorMessage error={error} />}
          <AppTextField
            label="Email"
            name="email"
            disabled={isLoading}
            placeholder="sancla@student.arteveldehs.be"
            autoComplete="email"
            keyboardType="email-address"
          />
          <AppTextField
            label="Password"
            name="password"
            disabled={isLoading}
            secureTextEntry={true}
          />
          <AppSubmitButton disabled={isLoading}>Login</AppSubmitButton>
          <TextButton style={styles.textButton} onPress={handleRegisterPress}>
            No account? Register here!
          </TextButton>
        </DefaultView>
      </AppForm>
      <StatusBar style="dark" />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: Variables.sizes.horizontalPadding,
    alignItems: "center",
  },
  title: {
    marginTop: Variables.sizes.medium,
    marginBottom: Variables.sizes.xl,
  },
  button: {
    marginTop: Variables.sizes.xs,
    width: "100%",
  },
});
