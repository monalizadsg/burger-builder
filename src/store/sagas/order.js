import { put } from "redux-saga/effects";
import * as actions from "../actions/index";
import axios from "../../commons/api";

export function* purchaseBurgerSaga(action) {
  yield put(actions.purchaseBurgerStart());
  try {
    const response = yield axios.post(
      "/orders.json?auth=" + action.token,
      action.orderData
    );
    yield put(
      actions.purchaseBurgerSuccess(response.data.name, action.orderData)
    );
  } catch (error) {
    yield put(actions.purchaseBurgerFail(error));
  }
}

export function* fetchOrdersSaga(action) {
  yield put(actions.fetchOrdersStart());
  try {
    const queryParams =
      "?auth=" +
      action.token +
      '&orderBy="userId"&equalTo="' +
      action.userId +
      '"';
    const response = yield axios.get("/orders.json" + queryParams);
    const fetchOrders = [];
    for (let key in response.data) {
      fetchOrders.push({ ...response.data[key], id: key });
    }
    yield put(actions.fetchOrdersSucess(fetchOrders));
  } catch (error) {
    yield put(actions.fetchOrdersFail(error));
  }
}
