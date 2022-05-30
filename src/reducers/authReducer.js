import { types } from "../types/types";


const initialState = {
  logged: false
}

export const authReducer = (state = initialState, action) => {

  switch (action.type) {
    case types.authLogin:
      return {
        ...action.payload,
        logged: true
      }

    case types.authLogout:
      return {
        logged: false
      }
  
    default:
      return state;
  }
}