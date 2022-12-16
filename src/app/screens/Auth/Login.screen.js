import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { useMutation } from "@tanstack/react-query";
import { login } from "../../../core/modules/auth/api";
import isVoid from "../../../core/utils/isVoid";
import Button from "../../components/design/Button/Button.design.component";
import TextField from "../../components/design/Form/TextField.design.component";
import Title from "../../components/design/Text/Title.design.component";
import { Variables } from "../../style";
import { Navigation } from "../../../core/navigation";

export const LoginScreen = ({ navigation }) => {
  const { mutate, isLoading, isError, error } = useMutation(login);

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (isError) {
      alert(error);
    }
  }, [isError]);

  const handleChange = (name, value) => {
    setData({
      ...data,
      [name]: value,
    });
  };

  const handlePress = async () => {
    if (!isVoid(data.email) && !isVoid(data.password)) {
      mutate({ ...data });
    }
  };

  return (
    <View style={styles.container}>
      <Title style={styles.title}>Login</Title>
      <TextField
        label="Email"
        name="email"
        disabled={isLoading}
        value={data.email}
        placeholder="sancla@student.arteveldehs.be"
        autoComplete="email"
        keyboardType="email-address"
        onChangeText={(text) => handleChange("email", text)}
      />
      <TextField
        label="Password"
        name="password"
        disabled={isLoading}
        value={data.password}
        secureTextEntry={true}
        onChangeText={(text) => handleChange("password", text)}
      />
      <Button style={styles.button} onPress={handlePress} disabled={isLoading}>
        Login
      </Button>
      <Button
        style={styles.button}
        color={Variables.colors.secondary}
        onPress={() => navigation.navigate(Navigation.REGISTER)}
        disabled={isLoading}
      >
        Or register instead
      </Button>
    </View>
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
