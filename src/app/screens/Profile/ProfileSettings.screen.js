import DefaultView from "../../components/design/View/DefaultView.design.component";
import { supabase } from "../../../core/api/supabase";
import AppForm from "../../components/shared/Form/AppForm.shared.component";
import * as yup from "yup";
import AppTextField from "../../components/shared/Form/AppTextField.shared.component";
import TextButton from "../../components/design/Button/TextButton.design.component";
import AppSubmitButton from "../../components/shared/Form/AppSubmitButton.shared.component";
import { ErrorMessage } from "formik";
import Title from "../../components/design/Text/Title.design.component";
import { ScrollView, StyleSheet } from "react-native";
import { Variables } from "../../style";
import { useMutation, useQuery } from "@tanstack/react-query";
import {
  getMe,
  updateUserProfile,
} from "../../../core/modules/userProfile/api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAuth } from "../../components/shared/Auth/AuthProvider.shared.component";
import { AppSwitchField } from "../../components/shared/Form/AppSwitchField.shared.component";

const schema = yup.object().shape({
  likes: yup.bool(),
  stories: yup.bool(),
});

export const ProfileSettingsScreen = ({ navigation }) => {
  const { settings, updateSettings } = useAuth();
  const { mutate, isLoading, isError, error } = useMutation(updateUserProfile);

  const { data } = useQuery(["profile"], getMe);
  if (!data || !data?.data || data.error) return null;
  const profile = data?.data;

  const handleSubmit = async (values) => {
    mutate(values);
  };

  const handlePreferencesSubmit = async (values) => {
    try {
      await AsyncStorage.setItem("@show_likes", values.likes.toString());
    } catch (e) {}
    try {
      await AsyncStorage.setItem("@show_stories", values.stories.toString());
    } catch (e) {}
    updateSettings();
  };

  return (
    <DefaultView padding={false}>
      <ScrollView>
        <AppForm
          initialValues={{
            likes: settings.showLikes,
            stories: settings.showStories,
          }}
          validationSchema={schema}
          onSubmit={handlePreferencesSubmit}
        >
          <DefaultView style={styles.container}>
            <Title style={styles.title}>Account Settings</Title>
            {isError && <ErrorMessage error={error} />}
            <AppSwitchField
              name="likes"
              label="Show like count?"
              disabled={isLoading}
            />
            <AppSwitchField
              name="stories"
              label="Show stories?"
              disabled={isLoading}
            />
            <AppSubmitButton disabled={isLoading}>
              Save preferences
            </AppSubmitButton>
          </DefaultView>
        </AppForm>
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
            <AppSubmitButton disabled={isLoading}>
              Update Profile
            </AppSubmitButton>
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
      </ScrollView>
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
