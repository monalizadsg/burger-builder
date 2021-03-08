import { put } from "redux-saga/effects";
import * as actions from "../actions/index";
import axios from "../../commons/api";

export function* initIngredientsSaga(action) {
  try {
    const response = yield axios.get(
      "https://my-burger-react-8356c-default-rtdb.firebaseio.com/ingredients.json"
    );
    yield put(actions.setIngredients(response.data));
  } catch (error) {
    yield put(actions.fetchIngredientFailed());
  }
}
