import { combineReducers } from "redux";

import alarmReducer from './Alarms/reducer'
import userReducer from './Users/reducer'
import machineReducer from './Machines/reducer'

export const rootReducer = combineReducers({
    alarmReducer,
    userReducer,
    machineReducer
})