import { Modal, StyleSheet, View } from "react-native";
import { Variables } from "../../../style";
import TextButton from "../Button/TextButton.design.component";

export const ListDialog = ({ onDismiss, children }) => {
  return (
    <Modal visible={true} transparent={true} onDismiss={onDismiss}>
      <View style={styles.backdrop}>
        <View style={styles.container}>{children}</View>
      </View>
    </Modal>
  );
};

ListDialog.Button = ({ children, onPress }) => {
  return (
    <TextButton onPress={onPress} color={Variables.colors.text}>
      {children}
    </TextButton>
  );
};

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: Variables.sizes.horizontalPadding * 2,
  },
  container: {
    width: "100%",
    // flexGrow: 1,
    backgroundColor: Variables.colors.white,
    paddingBottom: 0,
    borderRadius: Variables.sizes.xs,
    shadowColor: "black",
    shadowRadius: Variables.sizes.xxs,
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
});

export default ListDialog;
