import styled from "styled-components";
import { FormWrapper } from "../Home/Home.style";
import { PHONE_BREAK } from "../../constants";

export const Heading2 = styled.h2`
  padding-bottom: 30px;
`;

export const Heading1 = styled.h1`
  margin-left: 35%;
  margin-top: 50px;
  @media only screen and (max-width: ${PHONE_BREAK}) {
    margin-left: 10%;

    padding-right: 30px;
    padding-left: 30px;
  }
`;
export const FormWrapper2 = styled(FormWrapper)`
  height: 250px;
  text-align: center;
`;
