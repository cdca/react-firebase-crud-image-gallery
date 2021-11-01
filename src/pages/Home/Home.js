import React, { useState, useEffect, useContext } from "react";
import { db } from "../../config/firebase-config";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import ImageGrid from "../../components/ImageGrid/ImageGrid";
import UploadForm from "../../components/Form/UploadForm";
import { Row, Cards } from "../../style/globalStyle";
import { PopUpContext } from "../../hooks/context";
import Auth from "../../components/Auth/Auth";
import { FormWrapper } from "./Home.style";

const Home = ({ userObj }) => {
  const [images, setImages] = useState([]);
  const [show, setShow] = useState(true);
  const { popUp, setPopUp } = useContext(PopUpContext);

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

  const onClick = () => {
    setShow(!show);
  };

  return (
    <Row>
      {popUp ? <Auth /> : null}
      <Cards onClick={onClick}>
        {images.map((image) => (
          <ImageGrid
            key={image.id}
            imageObj={image}
            owner={image.creatorId === userObj.uid}
          />
        ))}
      </Cards>
      <FormWrapper>
        <UploadForm userObj={userObj} />
      </FormWrapper>
    </Row>
  );
};
export default Home;
