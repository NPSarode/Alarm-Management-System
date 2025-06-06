import { GET_USERS_SUCCESS, GET_USERS_FAIL } from "./actionTypes"

const initialState = {
    error: {},
    users: []
  }

const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_USERS_SUCCESS: 
        return {
            ...state,
            users: action.payload,
            error: {}
        }
        case GET_USERS_FAIL: 
        return {
            ...state,
            error: action.payload
        }
        default: 
        return state
    }
}

export default userReducer