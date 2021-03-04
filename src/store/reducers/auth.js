import * as actionsTypes from "../actions/actionsTypes";
import { updateObject } from "./utility";

const initialState = {
  token: null,
  userId: null,
  error: null,
  loading: false,
  authRedirectPath: "/",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionsTypes.AUTH_START:
      return updateObject(state, { error: null, loading: true });
    case actionsTypes.AUTH_SUCCESS:
      return updateObject(state, {
        token: action.idToken,
        userId: action.userId,
        error: null,
        loading: false,
      });
    case actionsTypes.AUTH_FAIL:
      return updateObject(state, { error: action.error, loading: false });
    case actionsTypes.AUTH_LOGOUT:
      return updateObject(state, { token: null, userId: null });
    case actionsTypes.SET_AUTH_REDIRECT_PATH:
      return updateObject(state, { authRedirectPath: action.path });
    default:
      return state;
  }
};

export default reducer;
