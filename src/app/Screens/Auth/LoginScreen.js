import { useAuth } from "../../Contexts/Auth.context";
import { View } from "react-native";
import Text from "../../Components/Design/Text/Text";

export const LoginScreen = () => {
  const auth = useAuth();

  return (
    <View>
      <Text>Heye!</Text>
    </View>
  );
};
