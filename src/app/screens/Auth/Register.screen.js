import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet } from "react-native";
import { register } from "../../../core/modules/auth/api";
import { Navigation } from "../../../core/navigation";
import TextButton from "../../components/design/Button/TextButton.design.component";
import DefaultView from "../../components/design/View/DefaultView.design.component";
import UserForm from "../../components/shared/User/UserForm.shared.component";
import { Variables } from "../../style";

export const RegisterScreen = ({ navigation }) => {
  return (
    <>
      <DefaultView>
        <UserForm
          updateMethod={register}
          onSuccess={() => navigation.navigate(Navigation.LOGIN)}
          label="Create account"
        >
          <TextButton
            style={styles.textButton}
            onPress={() => navigation.navigate(Navigation.LOGIN)}
          >
            Login instead
          </TextButton>
        </UserForm>
      </DefaultView>
      <StatusBar style="light" />
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
