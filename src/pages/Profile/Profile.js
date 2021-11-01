import React, { useState, useEffect } from "react";
import { updateProfile } from "firebase/auth";
import { db } from "../../config/firebase-config";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import ImageGrid from "../../components/ImageGrid/ImageGrid";
import { Heading2, Heading1, FormWrapper2 } from "./Profile.style";
import {
  Row,
  StyledInputField,
  Button,
  StyledForm,
  StyledInput,
  Cards,
} from "../../style/globalStyle";

const Profile = ({ userObj, changeUserName }) => {
  const [images, setImages] = useState([]);
  const [newDisplayName, setNewDisplayName] = useState(
    userObj?.displayName?.length ? userObj.displayName : ""
  );

  useEffect(() => {
    const getData = onSnapshot(
      query(collection(db, "images"), orderBy("createdAt", "desc")),
      (snapshot) => {
        const imageArray = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setImages(imageArray);
      }
    );
    return () => getData();
  }, []);

  const onChange = (data) => {
    const {
      target: { value },
    } = data;
    setNewDisplayName(value);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    if (userObj.displayName !== newDisplayName) {
      await updateProfile(userObj, {
        displayName: newDisplayName,
      });
    }
    changeUserName();
  };

  return (
    <div>
      {userObj?.displayName?.length ? (
        <div>
          <Heading1> Your images </Heading1>
          <Row>
            <Cards>
              {images.map((image) => {
                if (userObj.uid === image.creatorId) {
                  return (
                    <ImageGrid
                      key={image.id}
                      imageObj={image}
                      owner={image.creatorId === userObj.uid}
                    />
                  );
                } else return null;
              })}
            </Cards>
            <FormWrapper2>
              <Heading2>Update profile</Heading2>
              <StyledForm onSubmit={onSubmit}>
                Set new user name:
                <StyledInputField>
                  <StyledInput
                    type="text"
                    placeholder="Name"
                    onChange={onChange}
                    value={newDisplayName}
                  />
                </StyledInputField>
                <Button>Update profile</Button>
              </StyledForm>
            </FormWrapper2>
          </Row>
        </div>
      ) : (
        <Heading1>Nothing here, please login or register.</Heading1>
      )}
    </div>
  );
};

export default Profile;
