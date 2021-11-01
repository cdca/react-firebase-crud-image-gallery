import styled from "styled-components";
import { Link } from "react-router-dom";
import { Container } from "../../style/globalStyle";
import { YELLOW_LIGHT, PHONE_BREAK } from "../../constants";
import { BsCardImage } from "react-icons/bs";

export const Nav = styled.nav`
  background: ${YELLOW_LIGHT};
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 999;
  padding-left: 20px;
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  ${Container};
  z-index: 1;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding-right: 50px;
  padding-left: 50px;

  @media only screen and (max-width: ${PHONE_BREAK}) {
    padding-right: 30px;
    padding-left: 30px;
  }
`;

export const NavLogo = styled(Link)`
  color: #000;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
`;

export const NavIcon = styled(BsCardImage)`
  margin-right: 0.5rem;
  color: #000;
`;

export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: ${PHONE_BREAK}) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: ${PHONE_BREAK}) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    left: ${({ click }) => (click ? 0 : "-100%")};
    opacity: 1;
    transition: all 0.5s ease;
    background: ${YELLOW_LIGHT};
    align-content: center;
  }
`;

export const NavItem = styled.li`
  height: 80px;
  border-bottom: 2px solid transparent;
  &:hover {
    border-bottom: 2px solid #000;
  }
  @media screen and (max-width: ${PHONE_BREAK}) {
    width: 100%;
    &:hover {
      border: none;
    }
  }
`;

export const NavLinks = styled(Link)`
  color: #000;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;
  @media screen and (max-width: ${PHONE_BREAK}) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;
    &:hover {
      color: #000;
      transition: all 0.3s ease;
    }
  }
`;
