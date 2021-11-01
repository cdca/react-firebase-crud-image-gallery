import styled from "styled-components";
import { GRAY } from "../../constants";

export const StyledInputFiePicker = styled.input`
  opacity: 0;
  height: 0;
`;

export const Pcontainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 120px;
`;

export const StyledInputImage = styled.img`
  margin: 5px;
  max-height: 200px;
  max-width: 95%;
  width: auto;
  height: auto;
  object-fit: scale-down;
`;

export const PhotoContainer = styled.div`
  background-color: ${GRAY};
  display: flex;
  flex-direction: column;
  padding: 30px;
  height: 300px;
  width: 340px;
  justify-content: center;
  border-radius: 20px;
  max-height: 400px;
  text-align: center;
  max-width: 400px;
  gap: 5px;
`;

export const StyledError = styled.div`
  background-color: red;
  width: 340px;
  text-align: center;
  font-weight: 600;
`;
