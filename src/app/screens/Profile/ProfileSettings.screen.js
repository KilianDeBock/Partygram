import DefaultView from "../../components/design/View/DefaultView.design.component";
import { supabase } from "../../../core/api/supabase";
import AppForm from "../../components/shared/Form/AppForm.shared.component";
import * as yup from "yup";
import AppTextField from "../../components/shared/Form/AppTextField.shared.component";
import TextButton from "../../components/design/Button/TextButton.design.component";
import AppSubmitButton from "../../components/shared/Form/AppSubmitButton.shared.component";
import { ErrorMessage } from "formik";
import Title from "../../components/design/Text/Title.design.component";
import { StyleSheet } from "react-native";
import { Variables } from "../../style";
import { Navigation } from "../../../core/navigation";
import { useMutation } from "@tanstack/react-query";
import {
  getMe,
  updateUserProfile,
} from "../../../core/modules/userProfile/api";
import { useEffect, useState } from "react";

const schema = yup.object().shape({
  firstname: yup.string().required(),
  lastname: yup.string().required(),
  username: yup.string().required(),
});

export const ProfileSettingsScreen = ({ navigation }) => {
  const [profile, setProfile] = useState(null);
  const { mutate, isLoading, isError, error } = useMutation(updateUserProfile);

  // todo make use query
  useEffect(() => {
    const getProfile = async () => {
      const p = await getMe();
      setProfile(p.data);
    };
    void getProfile();
  }, []);

  if (!profile) return null;

  const handleSubmit = async (values) => {
    mutate(values);
  };

  const handleRegisterPress = () => {
    navigation.navigate(Navigation.REGISTER);
  };

  return (
    <DefaultView padding={false}>
      <AppForm
        initialValues={{
          firstname: profile.firstname,
          lastname: profile.lastname,
          username: profile.username,
        }}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <DefaultView style={styles.container}>
          <Title style={styles.title}>Account Settings</Title>
          {isError && <ErrorMessage error={error} />}
          <AppTextField
            label="Firstname"
            name="firstname"
            disabled={isLoading}
            placeholder="John"
          />
          <AppTextField
            label="Lastname"
            name="lastname"
            disabled={isLoading}
            placeholder="Doe"
          />
          <AppTextField
            label="Username"
            name="username"
            disabled={isLoading}
            placeholder="Doe"
          />
          <AppSubmitButton disabled={isLoading}>Update Profile</AppSubmitButton>
          <TextButton
            style={styles.textButton}
            onPress={() => {
              supabase.auth.signOut();
            }}
          >
            Log Out
          </TextButton>
        </DefaultView>
      </AppForm>
    </DefaultView>
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
