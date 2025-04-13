import { all, fork } from "redux-saga/effects";

import watchAuth from "./AuthSaga/auth-sata";

export default function* rootSagas() {
  yield all([fork(watchAuth)]);
}
