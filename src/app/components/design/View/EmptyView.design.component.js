import Icons from "@expo/vector-icons/MaterialCommunityIcons";
import { StyleSheet } from "react-native";
import { Variables } from "../../../style";
import Button from "../Button/Button.design.component";
import Text from "../Text/Text.design.component";
import Title from "../Text/Title.design.component";
import CenteredView from "./CenteredView.design.component";

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
      <Button onPress={onPress} style={styles.button}>
        Toevoegen
      </Button>
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
