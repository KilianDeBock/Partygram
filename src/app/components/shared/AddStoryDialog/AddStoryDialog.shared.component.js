import { useEffect, useState } from "react";
import isVoid from "../../../../core/utils/isVoid";
import ImagePickerDialog from "../ImagePicker/ImagePickerDialog.shared.component";
import { useMutation } from "@tanstack/react-query";
import IconButton from "../../design/Button/IconButton.design.component";
import { createStory } from "../../../../core/modules/post/api";

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
      <IconButton onPress={onAddStory} size={40} icon="plus" />
      {addStoryDialog && (
        <ImagePickerDialog
          onDismiss={() => setAddStoryDialog(false)}
          onImage={handleImage}
        />
      )}
    </>
  );
};
