import { types } from "../types/types";

const initialState = {
  isModalOpen: false,
  isConfirmOpen: false
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
    
    case types.uiOpenConfirm:
      return {
        ...state,
        isConfirmOpen: true
      }

    case types.uiCloseConfirm:
      return {
        ...state,
        isConfirmOpen: false
      }
  
    default:
      return state;
  }
}