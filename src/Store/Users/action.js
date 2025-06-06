import { GET_USERS, GET_USERS_SUCCESS, GET_USERS_FAIL } from "./actionTypes"

// getUsers
export const getUsers = () => {
    return {
        type: GET_USERS,
    }
}

export const getUsersSuccess = (data) => {
    return {
        type: GET_USERS_SUCCESS,
        payload: data
    }
}

export const getUsersFail = (data) => {
    return {
        type: GET_USERS_FAIL,
        payload: data
    }
}