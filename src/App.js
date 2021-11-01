import GlobalStyle from "./style/globalStyle";
import Home from "./pages/Home/Home";
import { PROFILE_PAGE } from "./constants";
import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import { auth } from "./config/firebase-config";
import { onAuthStateChanged } from "firebase/auth";
import Spinner from "./components/Spinner/Spinner";
import { LoginContext, PopUpContext } from "./hooks/context";
import Profile from "./pages/Profile/Profile";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  const [loading, setLoading] = useState(false);
  const [userObj, setUserObj] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const [popUp, setPopUp] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserObj(user);
      } else {
        setUserObj({});
      }
      setLoading(true);
    });
  }, []);

  const changeUserName = () => {
    setUserObj({ ...auth.currentUser });
    setUserObj(auth.currentUser);
  };

  return (
    <PopUpContext.Provider value={{ popUp, setPopUp }}>
      <LoginContext.Provider value={{ loggedIn, setLoggedIn }}>
        {loading ? (
          <Router>
            <GlobalStyle />
            <Navbar userObj={userObj} />
            <Switch>
              <Route exact path="/">
                <Home userObj={userObj} />
              </Route>
              <Route exact path={PROFILE_PAGE}>
                <Profile userObj={userObj} changeUserName={changeUserName} />
              </Route>
            </Switch>
          </Router>
        ) : (
          <Spinner />
        )}
      </LoginContext.Provider>
    </PopUpContext.Provider>
  );
}

export default App;
