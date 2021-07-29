import { all } from "redux-saga/effects";
import authSaga from "./auth/sagas";
import eventsSaga from "./events/sagas";

export default function* rootSaga() {
  yield all([authSaga(), eventsSaga()]);
}