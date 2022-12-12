import { StyleSheet } from "react-native";
import Icons from "@expo/vector-icons/MaterialCommunityIcons";
import Text from "../Text/Text";
import Title from "../Text/Title";
import SecondaryButton from "../Button/SecondaryButton";
import CenteredView from "./CenteredView";
import { Variables } from "../../../style";

const EmptyView = ({ title, description, icon, onPress }) => {
  return (
    <CenteredView>
      <Icons
        name={`${icon}-outline`}
        size={Variables.sizes.xxxl}
        color={Variables.colors.gray}
      />
      <Title style={[styles.title, styles.text]}>{title}</Title>
      <Text color="light" style={styles.text}>
        {description}
      </Text>
      <SecondaryButton onPress={onPress} style={styles.button}>
        Toevoegen
      </SecondaryButton>
    </CenteredView>
  );
};

const styles = StyleSheet.create({
  title: {
    marginVertical: Variables.sizes.xs,
  },
  text: {
    textAlign: "center",
    paddingHorizontal: Variables.sizes.large,
  },
  button: {
    marginTop: Variables.sizes.medium,
  },
});

export default EmptyView;
