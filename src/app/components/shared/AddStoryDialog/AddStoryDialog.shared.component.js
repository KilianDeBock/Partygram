import { useEffect, useState } from "react";
import isVoid from "../../../../core/utils/isVoid";
import ImagePickerDialog from "../ImagePicker/ImagePickerDialog.shared.component";
import { useMutation } from "@tanstack/react-query";
import IconButton from "../../design/Button/IconButton.design.component";
import { createStory } from "../../../../core/modules/post/api";
import { StyleSheet, View } from "react-native";
import { Variables } from "../../../style";

export const AddStoryDialog = () => {
  const [addStoryDialog, setAddStoryDialog] = useState(false);
  const { mutate, isLoading, isError, error } = useMutation((story) =>
    createStory(story)
  );

  useEffect(() => {
    if (isError) {
      alert(error);
    }
  }, [isError]);

  const handleImage = (base64) => {
    if (!isVoid(base64)) {
      console.log(base64);
      mutate({
        postFile: base64,
      });
    }
  };

  function onAddStory() {
    setAddStoryDialog(true);
  }

  return (
    <>
      <View style={styles.button}>
        <IconButton onPress={onAddStory} size={40} icon="plus" />
      </View>
      {addStoryDialog && (
        <ImagePickerDialog
          onDismiss={() => setAddStoryDialog(false)}
          onImage={handleImage}
        />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 50,
    aspectRatio: 1,
    borderRadius: 50,
    backgroundColor: Variables.colors.grayLight,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
  },
});
