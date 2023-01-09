import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import isVoid from "../utils/isVoid";

const useTitle = (title) => {
  const navigation = useNavigation();

  useEffect(() => {
    if (!isVoid(title)) {
      navigation.setOptions({
        title: title,
      });
    }
  }, [title]);
};

export default useTitle;
