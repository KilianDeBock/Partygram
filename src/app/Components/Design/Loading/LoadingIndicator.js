import { useEffect, useState } from "react";
import { ActivityIndicator } from "react-native";
import { Variables } from "../../../style";

// loading indicator that only shows after 1 second
const LoadingIndicator = ({ timeout = 1000 }) => {
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => {
      setVisible(true);
    }, timeout);
    return () => clearTimeout(id);
  }, []);

  if (!isVisible) {
    return null;
  }

  return <ActivityIndicator color={Variables.colors.primary} />;
};

export default LoadingIndicator;
