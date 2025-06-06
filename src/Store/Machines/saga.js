import { call, put, takeEvery } from "redux-saga/effects";

import { getMachinesFail, getMachinesSuccess } from "./action";
import { getMachines } from "../../Helper/backendHelper";
import { GET_MACHINES } from "./actionTypes";


function* onGetMachines() {
  try {
    const response = yield call(getMachines);
    yield put(getMachinesSuccess(response));
  } catch (error) {
    yield put(getMachinesFail(error));
  }
}


function* machineSaga() {
  yield takeEvery(GET_MACHINES, onGetMachines);
}

export default machineSaga;
