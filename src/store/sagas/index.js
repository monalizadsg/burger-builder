import { takeEvery } from "redux-saga/effects";
import {
  logoutSaga,
  checkAuthTimeoutSaga,
  authUserSaga,
  checkAuthStateSaga,
} from "./auth";
import { initIngredientsSaga } from "./burgerBuilder";
import { purchaseBurgerSaga, fetchOrdersSaga } from "./order";
import * as actionsTypes from "../actions/actionsTypes";

export function* watchAuth() {
  yield takeEvery(actionsTypes.AUTH_INITIATE_LOGOUT, logoutSaga);
  yield takeEvery(actionsTypes.AUTH_CHECK_TIMEOUT, checkAuthTimeoutSaga);
  yield takeEvery(actionsTypes.AUTH_USER, authUserSaga);
  yield takeEvery(actionsTypes.AUTH_CHECK_STATE, checkAuthStateSaga);
}

export function* watchBurgerBuilder() {
  yield takeEvery(actionsTypes.INIT_INGREDIENTS, initIngredientsSaga);
}

export function* watchOrder() {
  yield takeEvery(actionsTypes.PURCHASE_BURGER, purchaseBurgerSaga);
  yield takeEvery(actionsTypes.FETCH_ORDERS, fetchOrdersSaga);
}
