import { useEffect, useState } from "react";
import isVoid from "../../../../core/utils/isVoid";
import ImagePickerDialog from "../ImagePicker/ImagePickerDialog.shared.component";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import IconButton from "../../design/Button/IconButton.design.component";
import { createStory } from "../../../../core/modules/post/api";
import { StyleSheet, View } from "react-native";
import { Variables } from "../../../style";

import * as Location from "expo-location";

export const AddStoryDialog = () => {
  const [addStoryDialog, setAddStoryDialog] = useState(false);
  const queryClient = useQueryClient();
  const { mutate, isLoading, isError, error } = useMutation(
    (story) => createStory(story),
    {
      onSuccess: () => queryClient.invalidateQueries(["stories"]),
    }
  );

  useEffect(() => {
    if (isError) {
      alert(error);
    }
  }, [isError]);

  const handleImage = async (base64) => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    let location = "Planet Earth";
    if (status === "granted") {
      location = await Location.getCurrentPositionAsync({});
    }

    if (!isVoid(base64)) {
      await mutate({
        postFile: base64,
        location,
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
