import Icons from "@expo/vector-icons/MaterialCommunityIcons";
import { Pressable } from "react-native";
import { Variables } from "../../../style";

const IconButton = ({ icon, title, color, size, onPress }) => {
  return (
    <Pressable
      accessibilityLabel={title}
      onPress={onPress}
      android_ripple={{ borderless: true }}
    >
      <Icons name={icon} color={color} size={size || Variables.sizes.xl} />
    </Pressable>
  );
};

export default IconButton;
