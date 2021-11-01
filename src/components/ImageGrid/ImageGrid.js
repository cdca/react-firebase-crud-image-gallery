import React, { useState, useContext } from "react";
import { db, storage } from "../../config/firebase-config";
import { deleteDoc, doc } from "firebase/firestore";
import { deleteObject, ref } from "firebase/storage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import ShowImage from "./ShowImage";
import {
  StyledFaPosition,
  StyledFaIcon,
  StyledUploader,
  StyledCreate,
  StyledImageGrid,
  StyledHeding,
  StyledImage,
  ImageRow,
} from "./ImageGrid.style";

const ImageGrid = ({ imageObj, owner }) => {
  const [show, setShow] = useState(false);
  const onDeleteClick = () => {
    const remove = window.confirm("Do you want to delete this image?");
    if (remove) {
      deleteDoc(doc(db, `images/${imageObj.id}`));
      if (imageObj.photoUrl !== "") {
        deleteObject(ref(storage, imageObj.photoUrl));
      }
    }

    setShow(false);
  };

  const createdAt = (createdAt) => {
    var dateVar = new Date(createdAt);
    return (
      dateVar.getDate() +
      ". " +
      (dateVar.getMonth() + 1) +
      ". " +
      dateVar.getFullYear() +
      ". " +
      (dateVar.getHours() < 10
        ? "0" + dateVar.getHours()
        : dateVar.getHours()) +
      ":" +
      (dateVar.getMinutes() < 10
        ? "0" + dateVar.getMinutes()
        : dateVar.getMinutes())
    );
  };

  const onClick = () => setShow(!show);

  return (
    <StyledImage onClick={onClick}>
      {show ? <ShowImage object={imageObj} /> : null}
      <StyledHeding>{imageObj.name}</StyledHeding>
      {imageObj.photoUrl && (
        <StyledImageGrid src={imageObj.photoUrl} alt={imageObj.id} />
      )}
      <ImageRow>
        <StyledUploader> by {imageObj.creatorName}</StyledUploader>
        <StyledCreate> {createdAt(imageObj.createdAt)}</StyledCreate>
      </ImageRow>
      {owner && (
        <StyledFaPosition>
          <StyledFaIcon onClick={onDeleteClick}>
            <FontAwesomeIcon icon={faTrash} />
          </StyledFaIcon>
        </StyledFaPosition>
      )}
    </StyledImage>
  );
};

export default ImageGrid;
