import React, { useEffect, useState } from "react";
import ImagePickerDialog from "../ImagePicker/ImagePickerDialog.shared.component";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import IconButton from "../../design/Button/IconButton.design.component";
import { Image, Pressable, StyleSheet, View } from "react-native";
import { createPost } from "../../../../core/modules/post/api";
import ListDialog from "../../design/Dialog/ListDialog.design.component";
import isVoid from "../../../../core/utils/isVoid";
import AppForm from "../Form/AppForm.shared.component";
import AppTextField from "../Form/AppTextField.shared.component";
import AppSubmitButton from "../Form/AppSubmitButton.shared.component";

import * as Location from "expo-location";

export const AddPostDialog = ({ openDialog = false, onClose = () => {} }) => {
  const queryClient = useQueryClient();
  const [addPostImageDialog, setAddPostImageDialog] = useState(openDialog);
  const [addPostDialog, setAddPostDialog] = useState(false);
  const [image, setImage] = useState("");
  const { mutate, isLoading, isError, error } = useMutation(
    (post) => createPost(post),
    {
      onSuccess: () => queryClient.invalidateQueries(["myPosts"]),
    }
  );

  useEffect(() => {
    if (isError) {
      alert(error);
    }
  }, [isError]);

  function onAddPost() {
    setAddPostImageDialog(true);
  }

  const handleImage = (base64) => {
    if (!isVoid(base64)) {
      setImage(base64);
      setAddPostImageDialog(false);
      setAddPostDialog(true);
    }
  };

  const handleSubmit = async (e) => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    let location = "Planet Earth";
    if (status === "granted") {
      location = await Location.getCurrentPositionAsync({});
    }

    setAddPostDialog(false);
    onClose();

    await mutate({
      postFile: image,
      location,
      ...e,
    });
  };

  return (
    <>
      {!openDialog && (
        <Pressable style={[styles.imageView, styles.pressView]}>
          <IconButton
            style={styles.image}
            onPress={onAddPost}
            size={80}
            icon="plus"
          />
        </Pressable>
      )}
      {addPostImageDialog && (
        <ImagePickerDialog
          onDismiss={() => {
            setAddPostImageDialog(false);
            onClose();
          }}
          onImage={handleImage}
        />
      )}
      {addPostDialog && (
        <ListDialog onDismiss={() => setAddPostDialog(false)}>
          <Image
            style={{
              width: "100%",
              aspectRatio: 16 / 9,
            }}
            source={{ uri: `data:image/png;base64,${image}` }}
          />
          <View style={styles.form}>
            <AppForm
              initialValues={{
                title: "",
                description: "",
              }}
              onSubmit={handleSubmit}
            >
              <AppTextField
                label="Title"
                name="title"
                placeholder="Swimming in Paris!"
              />
              <AppTextField
                label="Description"
                name="description"
                placeholder="So, we went to paris and swam!"
              />
              <AppSubmitButton>Place post!</AppSubmitButton>
            </AppForm>
          </View>
        </ListDialog>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  image: {
    aspectRatio: 1,
  },
  imageView: {
    width: "31.6%",
    aspectRatio: 1,
    marginLeft: 5,
    marginBottom: 5,
  },
  pressView: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e0e0e0",
  },
  form: {
    width: "100%",
    height: 240,
  },
});
