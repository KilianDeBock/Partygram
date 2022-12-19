import TextAvatar from "../../Design/Avatar/TextAvatar.design.component";
import ListHeaderAvatar from "../../Design/List/ListHeaderAvatar.design.component";
import { useAuthContext } from "../Auth/AuthProvider.shared.component";

const UserHeaderSharedComponent = ({ onPress }) => {
  const { user } = useAuthContext();

  return (
    <ListHeaderAvatar
      title={`${user.first_name} ${user.last_name}`}
      description={user.email}
      onPress={onPress}
      avatar={
        <TextAvatar>
          {user.first_name[0]} {user.last_name[0]}
        </TextAvatar>
      }
    />
  );
};

export default UserHeaderSharedComponent;
