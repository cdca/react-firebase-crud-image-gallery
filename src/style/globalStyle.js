import styled, { createGlobalStyle } from "styled-components";
import {
  BLACK_LIGHT,
  BROWN_LIGHT,
  GRAY_LIGHT,
  PHONE_BREAK,
  WHITE_DARK,
  YELLOW_LIGHT,
  GRAY,
} from "../constants";

const GlobalStyle = createGlobalStyle`
 
* {
    box-sizing:border-box;
    margin: 0;
    padding:0;
    font-family:'Source Sans Pro', sans-serif;  
}
body{
  background-color: ${WHITE_DARK};
}
`;
export default GlobalStyle;

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 50px;
  padding-left: 50px;

  @media only screen and (max-width: ${PHONE_BREAK}) {
    padding-right: 30px;
    padding-left: 30px;
  }
`;

export const PageContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const StyledOverlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100vh;
  transition: all 5s ease-in-out;
  background: rgba(0, 0, 0, 0.4);
  background-size: cover;
  justify-self: center;
  justify-content: center;
  z-index: 999;
  overflow: hidden;
`;

export const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  grid-auto-rows: 300px;
  gap: 1rem;
  flex: 1;
  padding-left: 30px;
  border-radius: 40px;
  margin-left: 40px;
  @media only screen and (max-width: ${PHONE_BREAK}) {
    margin-left: 0px;
  }
`;

export const Button = styled.button`
  background-color: #000;
  border: 0;
  border-radius: 20px;
  color: #fff;
  padding: 16px 24px;
  align-self: flex-end;
  align-items: right;
  z-index: 1;

  cursor: pointer;
`;

export const ButtonNav = styled(Button)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-self: center;
  align-items: center;
  align-self: center;
  text-align: center;
`;

export const Row = styled.div`
  padding: 80px 0;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: ${(props) => (props.swap ? "row-reverse" : "row")};
  justify-content: space-between;

  @media (max-width: ${PHONE_BREAK}) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px 0;
    gap: 20px 0;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.swap ? "column-reverse" : "column")};
  flex: 1;
`;

export const StyledInputField = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const StyledInput = styled.input`
  max-width: 320px;
  width: 100%;
  height: 40px;
  padding: 10px;
  padding-left: 15px;
  border: 3px solid ${YELLOW_LIGHT};
  background-color: #fff;
  border-radius: 10px;
  font-weight: 500;
  font-size: 15px;
  color: #000;
`;

export const StyledInput2 = styled(StyledInput)`
  height: 80px;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 320px;

  max-height: 100%;
  justify-content: center;
  gap: 10px;
`;

export const StyledForm2 = styled(StyledForm)`
  height: 200px;
  gap: 0px;
`;

export const StyledLabel = styled.label`
  font-size: 20px;
  border: 1px solid #000;
  cursor: pointer;
  border-radius: 5px;
  padding: 5px;
  background-color: ${YELLOW_LIGHT};
  max-width: 130px;
  max-height: 35px;
  text-align: center;

  align-self: flex-end;
  align-items: right;
`;

export const StyledLabel2 = styled(StyledLabel)`
  font-size: 15px;
  align-self: center;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-items: center;
  align-self: center;
  background-color: white;
  border-radius: 16px;
  padding: 16px;
`;

export const ContentWrapper2 = styled(ContentWrapper)`
  background-color: ${GRAY};
  padding: 10px 50px 50px 50px;
  width: 430px;
`;
