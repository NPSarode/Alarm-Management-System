import {
  GET_MACHINES,
  GET_MACHINES_SUCCESS,
  GET_MACHINES_FAIL,
} from "./actionTypes";

// getMachines
export const getMachines = () => {
  return {
    type: GET_MACHINES,
  };
};

export const getMachinesSuccess = (data) => {
  return {
    type: GET_MACHINES_SUCCESS,
    payload: data,
  };
};

export const getMachinesFail = (data) => {
  return {
    type: GET_MACHINES_FAIL,
    payload: data,
  };
};
