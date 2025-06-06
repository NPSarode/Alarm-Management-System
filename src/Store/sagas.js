import { all, fork } from "redux-saga/effects";

import AlarmSaga from './Alarms/saga'
import UserSaga from './Users/saga'
import MachineSaga from './Machines/saga'

export default function* rootSaga() {
yield all([
    fork(AlarmSaga),
    fork(UserSaga),
    fork(MachineSaga),
])
}