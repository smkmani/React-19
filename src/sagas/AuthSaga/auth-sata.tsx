import { takeEvery } from "redux-saga/effects";

function* watchSign() {
  try {
    yield console.log("watchSignwatchSign");
  } catch (err) {
    console.log("err ==>", err);
  }
}

export default function* watchAuth() {
  yield takeEvery("auth/lmsAuthRequest", watchSign);
}
