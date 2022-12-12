import { Formik } from "formik";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
} from "react-native";

const AppForm = ({ children, ...rest }) => {
  return (
    <Formik {...rest} validateOnMount={true}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.keyboardAvoidingView}
      >
        <ScrollView
          style={styles.scrollView}
          keyboardShouldPersistTaps="always"
        >
          {children}
        </ScrollView>
      </KeyboardAvoidingView>
    </Formik>
  );
};

const styles = StyleSheet.create({
  keyboardAvoidingView: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
});

export default AppForm;
