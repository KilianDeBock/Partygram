import { View } from "react-native";
import Text from "../../Components/Design/Text/Text";
import { useAuth } from "../../Components/Shared/Auth/AuthProvider";

export const LoginScreen = () => {
  const auth = useAuth();

  return (
    <View>
      <Text>Heye!</Text>
    </View>
  );
};
