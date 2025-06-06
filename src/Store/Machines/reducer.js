import { GET_MACHINES_SUCCESS, GET_MACHINES_FAIL } from "./actionTypes"

const initialState = {
    error: {},
    machines: []
  }

const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_MACHINES_SUCCESS: 
        return {
            ...state,
            machines: action.payload,
            error: {}
        }
        case GET_MACHINES_FAIL: 
        return {
            ...state,
            error: {}
        }
        default: 
        return state
    }
}

export default userReducer