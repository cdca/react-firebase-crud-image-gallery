import React, { useState, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import { storage, db, auth } from "../../config/firebase-config";
import { addDoc, collection } from "firebase/firestore";
import { ref, uploadString, getDownloadURL } from "firebase/storage";
import { useForm } from "react-hook-form";
import {
  StyledInputFiePicker,
  Pcontainer,
  StyledInputImage,
  PhotoContainer,
  StyledError,
} from "./UploadForm.style";
import {
  StyledInputField,
  Button,
  StyledInput,
  StyledForm,
  StyledInput2,
  StyledLabel,
} from "../../style/globalStyle";

const UploadForm = ({ userObj }) => {
  const refPhoto = useRef();
  const [error, setError] = useState("");
  const [photo, setPhoto] = useState("");
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    let photoUrl = "";
    if (userObj.uid) {
      if (data.name && data.description) {
        if (photo !== "") {
          const photoRef = ref(storage, `images/${uuidv4()}/${userObj.uid}`);
          const response = await uploadString(photoRef, photo, "data_url");
          photoUrl = await getDownloadURL(response.ref);
        }

        await addDoc(collection(db, "images"), {
          creatorId: userObj.uid,
          name: data.name,
          creatorName: userObj.displayName,
          description: data.description,
          createdAt: Date.now(),
          photoUrl,
        });

        setPhoto("");
        setError("");
        reset();
      } else {
        setError("Please input name or description");
      }
    } else setError("You have to be registered to upload image");
  };

  const onFileChange = (event) => {
    const {
      target: { files },
    } = event;
    const theFile = files[0];
    const reader = new FileReader();
    reader.onloadend = (finishedEvent) => {
      const {
        currentTarget: { result },
      } = finishedEvent;
      setPhoto(result);
    };
    try {
      reader.readAsDataURL(theFile);
    } catch (e) {}
  };

  const onClick = () => {
    setPhoto("");
    refPhoto.current.value = "";
  };

  return (
    <Pcontainer>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <h1>Upload image</h1>
        <StyledInputField>
          <StyledInput
            type="text"
            placeholder="Image name"
            maxLength={20}
            {...register("name")}
          />
        </StyledInputField>
        <StyledInputField>
          <StyledInput2
            type="text"
            placeholder="Image description"
            maxLength={40}
            {...register("description")}
          />
        </StyledInputField>
        <StyledLabel for="input-file">Select Photo</StyledLabel>
        <StyledInputFiePicker
          id="input-file"
          type="file"
          ref={refPhoto}
          accept="image/*"
          onChange={onFileChange}
        />

        <Button value="Submit">Submit</Button>
        {error && <StyledError>{error}</StyledError>}
      </StyledForm>

      <Pcontainer>
        {photo && (
          <PhotoContainer>
            <h2>Your image </h2>
            <StyledInputImage src={photo} alt="Your image" />
            <StyledLabel onClick={onClick}>Clear</StyledLabel>
          </PhotoContainer>
        )}
      </Pcontainer>
    </Pcontainer>
  );
};
export default UploadForm;
