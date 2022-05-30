import { types } from "../types/types";

const initialState = {
  isModalOpen: false 
}

export const iuReducer = (state= initialState, action) => {

  switch (action.type) {
    case types.uiOpenModal:
      return {
        ...state,
        isModalOpen: true
      }

    case types.uiCloseModal:
      return {
        ...state,
        isModalOpen: false
      }
  
    default:
      return state;
  }
}