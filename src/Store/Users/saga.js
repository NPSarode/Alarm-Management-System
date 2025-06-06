import { call, put, takeEvery } from "redux-saga/effects";

import { getUsersFail, getUsersSuccess } from "./action";
import { getUsers } from "../../Helper/backendHelper";
import { GET_USERS } from "./actionTypes";


function* onGetUsers() {
  try {
    const response = yield call(getUsers);
    yield put(getUsersSuccess(response));
  } catch (error) {
    yield put(getUsersFail(error));
  }
}


function* userSaga() {
  yield takeEvery(GET_USERS, onGetUsers);
}

export default userSaga;
