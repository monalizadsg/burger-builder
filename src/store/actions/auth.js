import * as actionsTypes from "./actionsTypes";

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

export const logout = () => {
  return {
    type: actionsTypes.AUTH_INITIATE_LOGOUT,
  };
};

export const logoutSucceed = () => {
  return {
    type: actionsTypes.AUTH_LOGOUT,
  };
};

export const checkAuthTimeout = (expirationTime) => {
  return {
    type: actionsTypes.AUTH_CHECK_TIMEOUT,
    expirationTime: expirationTime,
  };
};

export const auth = (email, password, isSignup) => {
  return {
    type: actionsTypes.AUTH_USER,
    email: email,
    password: password,
    isSignup: isSignup,
  };
};

export const setAuthRedirectPath = (path) => {
  return {
    type: actionsTypes.SET_AUTH_REDIRECT_PATH,
    path: path,
  };
};

export const authCheckState = () => {
  return {
    type: actionsTypes.AUTH_CHECK_STATE,
  };
};
