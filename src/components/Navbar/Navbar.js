import React, { useState, useContext, useEffect } from "react";
import { PROFILE_PAGE } from "../../constants";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { LoginContext, PopUpContext } from "../../hooks/context";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
} from "./Navbar.style";
import { auth } from "../../config/firebase-config";
import { signOut } from "firebase/auth";
import { useHistory } from "react-router-dom";
import { ButtonNav } from "../../style/globalStyle";

function Navbar({ userObj }) {
  const history = useHistory();
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const { loggedIn, setLoggedIn } = useContext(LoginContext);
  const { popUp, setPopUp } = useContext(PopUpContext);

  useEffect(() => {
    if (userObj.displayName) {
      setLoggedIn(true);
    }
  });

  const onLogOutClick = () => {
    signOut(auth);
    setLoggedIn(false);
    history.push("/");
  };
  const onLoginClick = () => setPopUp(true);

  return (
    <IconContext.Provider value={{ color: "#000" }}>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/" onClick={closeMobileMenu}>
            <NavIcon />
            ImageGallery
          </NavLogo>
          <MobileIcon onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </MobileIcon>
          <NavMenu onClick={handleClick} click={click}>
            <NavItem>
              <NavLinks to="/" onClick={closeMobileMenu}>
                Home
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to={PROFILE_PAGE} onClick={closeMobileMenu}>
                {userObj?.displayName
                  ? `${userObj.displayName}'s Profile`
                  : `Profile`}
              </NavLinks>
            </NavItem>
            <NavItem>
              {loggedIn ? (
                <NavLinks to="/" onClick={closeMobileMenu}>
                  <ButtonNav onClick={onLogOutClick}>Log Out</ButtonNav>
                </NavLinks>
              ) : (
                <NavLinks to="/" onClick={closeMobileMenu}>
                  <ButtonNav onClick={onLoginClick}>Login</ButtonNav>
                </NavLinks>
              )}
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </IconContext.Provider>
  );
}

export default Navbar;
