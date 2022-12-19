import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { register } from "../../../core/modules/auth/api";
import DefaultView from "../../components/design/View/DefaultView.design.component";
import UserForm from "../../components/shared/User/UserForm.shared.component";
import { Variables } from "../../style";

export const RegisterScreen = () => {
  return (
    <>
      <DefaultView>
        <UserForm
          updateMethod={register}
          onSuccess={() => {}}
          label="Create account"
        />
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
