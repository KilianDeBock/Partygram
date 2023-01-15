import LoadingIndicator from "../Loading/LoadingIndicator.design.component";
import AvatarBase from "./AvatarBase.design.component";

const LoadingAvatar = ({ style }) => {
  return (
    <AvatarBase style={style}>
      <LoadingIndicator timeout={0} />
    </AvatarBase>
  );
};

export default LoadingAvatar;
