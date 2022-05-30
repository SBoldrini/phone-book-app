import { types } from "../types/types";

const initialState = {
  contacts: [],
  activeContact: null
};

export const contactReducer = (state=initialState, action) => {

  switch (action.type) {
    case types.contactAddNew:
      return {
        ...state,
        contacts: [
          ...state.contacts,
          action.payload
        ]
      }
    
    case types.contactSetActive:
      return {
        ...state,
        activeContact: true
      }

    case types.contactClearActive:
      return {
        ...state,
        activeContact: null
      }

    case types.contactUpdated:
      return {
        ...state,
        contacts: state.contacts.map(
          c => (c.id === action.payload.id) ? action.payload : c
        )
      }

    case types.contactDeleted:
      return {
        ...state,
        contacts: state.contacts.filter(
          c => (c.id !== action.payload)
        )
      }

    case types.contactLoaded:
      return {
        ...state,
        contacts: [...action.payload]
      }

    case types.contactLogout:
      return {
        ...initialState
      }
  
    default:
      return state;
  }
}