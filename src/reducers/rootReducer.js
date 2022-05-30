import { combineReducers } from 'redux';

import { authReducer } from './authReducer';
import { iuReducer } from './iuReducer';
import { contactReducer } from './contactReducer';

export const rootReducer = combineReducers({
  auth: authReducer,
  ui: iuReducer,
  contacts: contactReducer
});