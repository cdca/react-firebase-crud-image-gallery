import styled from "styled-components";
import { GRAY } from "../../constants";

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-items: center;
  max-width: 600px;
`;

export const Text = styled.div`
  margin-top: 8px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-items: center;
  background-color: white;
`;

export const StyledImg = styled.img`
  display: flex;
  justify-content: center;
  justify-items: center;
`;

export const StyledFaPosition = styled.div`
  position: absolute;
  right: 5px;
  bottom: 5px;
`;

export const StyledFaIcon = styled.button`
  margin-bottom: 5px;
  margin-right: 5px;
  font-size: 1rem;
  border: none;
  background-color: transparent;
`;

export const StyledUploader = styled.div`
  font-size: 11pt;
`;

export const StyledCreate = styled.div`
  color: gray;
  font-size: 11pt;
  margin-right: 27%;
`;

export const StyledImageGrid = styled.img`
  margin: 5px;
  max-height: 200px;
  max-width: 95%;
  width: auto;
  height: auto;
  object-fit: scale-down;
`;

export const StyledHeding = styled.div`
  width: 100%;
  text-align: center;
  font-weight: 500;
`;

export const StyledImage = styled.div`
  position: relative;
  background-color: ${GRAY};
  max-width: 320px;
  width: 100%;
  padding: 10px;
  color: black;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ImageRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
