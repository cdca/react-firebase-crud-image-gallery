import React, { useState, useContext } from "react";
import { auth } from "../../config/firebase-config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faGithub } from "@fortawesome/free-brands-svg-icons";
import { BsXSquareFill } from "react-icons/bs";
import { StyledSocial, SocialButton, RowForm, StyledX } from "./Auth.style";
import { useForm } from "react-hook-form";
import { Switch, Route } from "react-router-dom";
import { LoginContext, PopUpContext } from "../../hooks/context";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import {
  ButtonNav,
  StyledForm,
  StyledInput,
  StyledLabel2,
  ContentWrapper2,
  StyledOverlay,
} from "../../style/globalStyle";

const AuthForm = () => {
  const [newAccount, setNewAccount] = useState(false);
  const [error, setError] = useState("");
  const { loggedIn, setLoggedIn } = useContext(LoginContext);
  const { popUp, setPopUp } = useContext(PopUpContext);

  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    try {
      if (newAccount) {
        await createUserWithEmailAndPassword(
          auth,
          data.email,
          data.password
        ).then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: data.name,
            lastName: data.lastName,
          });
        });
      } else {
        await signInWithEmailAndPassword(auth, data.email, data.password);
      }
      if (auth.currentUser) {
        setLoggedIn(true);
        setPopUp(false);
      }
    } catch (error) {
      setError(error.message);
    }
  };

  const changeLoginForm = () => setNewAccount((prev) => !prev);

  const onClick = async (e) => {
    const {
      target: { name },
    } = e;
    let provider;
    if (name === "google") {
      provider = new GoogleAuthProvider();
    } else if (name === "github") {
      provider = new GithubAuthProvider();
    }
    try {
      await signInWithPopup(auth, provider);

      if (auth.currentUser) {
        setLoggedIn(true);
        setPopUp(false);
      }
    } catch (error) {
      setError(error.message);
    }
  };
  const onXClick = () => {
    setPopUp(false);
  };

  return (
    <StyledOverlay>
      <ContentWrapper2>
        <div>
          <StyledForm onSubmit={handleSubmit(onSubmit)}>
            <StyledX onClick={onXClick} icon={BsXSquareFill} />
            {newAccount ? <h1> Register </h1> : <h1> Log in </h1>}
            <StyledInput
              name="email"
              type="text"
              placeholder="Email"
              required
              {...register("email")}
            />
            <StyledInput
              name="password"
              type="password"
              placeholder="Password"
              required
              {...register("password")}
            />
            {newAccount && (
              <>
                <StyledInput
                  name="name"
                  type="text"
                  placeholder="Name"
                  required
                  {...register("name")}
                />
                <StyledInput
                  name="name"
                  type="text"
                  placeholder="Last name"
                  required
                  {...register("lastName")}
                />
              </>
            )}
            <RowForm>
              <StyledLabel2 onClick={changeLoginForm}>
                {newAccount ? "Log In" : "Create Account"}
              </StyledLabel2>
              <ButtonNav
                type="submit"
                value={newAccount ? "Create Account" : "Log In"}
              >
                Submit
              </ButtonNav>
            </RowForm>
            <span>{error}</span>
          </StyledForm>
        </div>
        <StyledSocial>
          <SocialButton name="google" onClick={onClick}>
            Continue with Google <FontAwesomeIcon icon={faGoogle} />
          </SocialButton>
          <SocialButton name="github" onClick={onClick}>
            Continue with Github <FontAwesomeIcon icon={faGithub} />
          </SocialButton>
        </StyledSocial>
        <Switch>
          <Route exact path="/"></Route>
        </Switch>
      </ContentWrapper2>
    </StyledOverlay>
  );
};

export default AuthForm;
