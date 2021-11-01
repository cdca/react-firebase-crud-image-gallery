import React from "react";
import { ImageContainer, Content, Text, StyledImg } from "./ImageGrid.style";
import { ContentWrapper, StyledOverlay } from "../../style/globalStyle";

const ShowImage = ({ object }) => {
  return (
    <StyledOverlay>
      <ContentWrapper>
        <ImageContainer>
          <StyledImg src={object.photoUrl} alt="Your image" />
        </ImageContainer>
        <Content>
          <Text> Image name: {object.name} </Text>
          <Text> Image description: {object.description} </Text>
          <Text> Uploaded by: {object.creatorName} </Text>
        </Content>
      </ContentWrapper>
    </StyledOverlay>
  );
};

export default ShowImage;
