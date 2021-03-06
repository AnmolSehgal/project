import React from "react";
import firebase from "firebase";
import "firebase/auth";
import { ConnectedRouter } from "connected-react-router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import history from "./store/history";
import Navbar from "./components/NavbarComponent";
import Routes from "./routes";

import bgImage from "./icons/background/backgroundImage.svg";

import { GlobalState, ProfileStateObject } from "./store/types";
import { fetchUserInfoSuccess } from "./store/actions/profileActions";
import { signOutRequest } from "./store/actions/signOut";
import {
  userLoginStatusFailure,
  userLoginStatusSuccess,
} from "./store/actions/signInAction";
import { getFriendsRequest } from "./store/actions/friendAction";
import AlertComponent from "./components/AlertComponent";
import { UID } from "./utils/constants/appConstant";

function App() {
  // const userLogin = useSelector(
  //   (state: GlobalState) => state.signIn.isLoggedIn
  // );
  const loginStatus = useSelector(
    (state: GlobalState) => state.signIn.isLoggedIn
  );
  const dispatch = useDispatch();

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user !== null) {
        const userData = {
          image: user.photoURL,
          name: user.displayName,
          email: user.email,
          phoneNumber: user.phoneNumber,
        };
        dispatch(fetchUserInfoSuccess(userData as ProfileStateObject));
      } else {
        if (loginStatus) dispatch(signOutRequest());
      }
    });
    if (localStorage.getItem(UID)) {
      dispatch(userLoginStatusSuccess());
      dispatch(getFriendsRequest());
    } else dispatch(userLoginStatusFailure());
  }, [dispatch, loginStatus]);

  return (
    <div
      className="h-screen"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <ConnectedRouter history={history}>
        <Navbar />
        <Routes />
      </ConnectedRouter>
      <AlertComponent />
    </div>
  );
}

export default App;
