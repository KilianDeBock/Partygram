import { Variables } from "../../../style";
import IconButton from "./IconButton.design.component";

const HeaderButton = ({ icon, title, color, onPress }) => {
  return (
    <IconButton
      icon={icon}
      title={title}
      color={color || Variables.colors.headerText}
      size={Variables.sizes.xl}
      onPress={onPress}
    />
  );
};

export default HeaderButton;
