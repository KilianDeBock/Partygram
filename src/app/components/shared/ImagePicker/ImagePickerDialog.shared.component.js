import ListDialog from "../../design/Dialog/ListDialog.design.component";
import * as ImagePicker from "expo-image-picker";

const ImagePickerDialog = ({ onDismiss, onImage }) => {
  const handlePress = async (type) => {
    try {
      const { status } =
        type === "camera"
          ? await ImagePicker.requestCameraPermissionsAsync()
          : await ImagePicker.requestMediaLibraryPermissionsAsync();

      if (status === "granted") {
        const method =
          type === "camera"
            ? ImagePicker.launchCameraAsync
            : ImagePicker.launchImageLibraryAsync;

        const { canceled, assets } = await method({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          base64: true,
        });
        if (!canceled && assets.length > 0) {
          onImage(assets[0].base64);
        }
      }
    } catch (error) {}
    onDismiss();
  };

  return (
    <ListDialog onDismiss={onDismiss}>
      <ListDialog.Button onPress={() => handlePress("camera")}>
        Use camera
      </ListDialog.Button>
      <ListDialog.Button onPress={() => handlePress("library")}>
        Choose picture
      </ListDialog.Button>
      <ListDialog.Button onPress={onDismiss}>Cancel</ListDialog.Button>
    </ListDialog>
  );
};

export default ImagePickerDialog;
