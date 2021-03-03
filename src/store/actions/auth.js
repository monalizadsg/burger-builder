import * as actionsTypes from "./actionsTypes";
import axios from "axios";

export const authStart = () => {
  return {
    type: actionsTypes.AUTH_START,
  };
};

export const authSuccess = (token, userId) => {
  return {
    type: actionsTypes.AUTH_SUCCESS,
    idToken: token,
    userId: userId,
  };
};

export const authFail = (error) => {
  return {
    type: actionsTypes.AUTH_FAIL,
    error: error,
  };
};

export const auth = (email, password, isSignup) => {
  return (dispatch) => {
    dispatch(authStart());
    const authData = {
      email: email,
      password: password,
      returnSecureToken: true,
    };
    let url =
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD0uEeH75v3w7qPVmGzrLut4JM_tl6kfVE";

    if (!isSignup) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD0uEeH75v3w7qPVmGzrLut4JM_tl6kfVE";
    }

    axios
      .post(url, authData)
      .then((response) => {
        console.log(response);
        dispatch(authSuccess(response.data.idToken, response.data.localId));
      })
      .then((error) => {
        console.log(error.response.data.error);
        dispatch(authFail(error.response.data.error));
      });
  };
};
