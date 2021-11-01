import styled from "styled-components";
import { BsXSquareFill } from "react-icons/bs";

export const StyledSocial = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 320px;
`;

export const SocialButton = styled.button`
  border-radius: 20px;
  border: none;
  padding: 10px 0;
  font-size: 12px;
  text-align: center;
  width: 150px;
  background: #fff;
  cursor: pointer;
  margin-bottom: 10px;
`;

export const RowForm = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  font-size: 15px;
  justify-content: space-between;
  justify-items: center;
  align-items: center;
  align-self: center;
  margin-bottom: 20px;
`;

export const StyledX = styled(BsXSquareFill)`
  right: 5px;
  bottom: 5px;
  font-size: 2rem;
  margin-left: 120%;
  cursor: pointer;
`;
