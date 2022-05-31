import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

import { fetchForm } from '../helpers/fetch';
import { types } from "../types/types";

const MySwal = withReactContent(Swal);

export const startLogin = (email, password) => {
  return async(dispatch) => {

    try {
      const resp = await fetchForm('api/auth/login', {email, password}, 'POST');
      const body = await resp.json();
  
      if (body.ok) {
        localStorage.setItem('logged', email);
        
        dispatch(login({
          name: body.name,
          email: body.email
        }));
      } else {
        MySwal.fire('Error', 'User or Password are not correct. Try again!.', 'error');
      }
      
    } catch (error) {
      MySwal.fire('Error', error.message, 'error');
    }



  }
}

export const startRegister = (name, email, password) => {

  return async(dispatch) => {

    try {

      const resp = await fetchForm('api/auth/register', { name, email, password }, 'POST');
      const body = await resp.json();
  
      if (body.ok) {
        localStorage.setItem('logged', email);
        
        dispatch(login({
          name: body.name,
          email: body.email
        }));

      } else {
        MySwal.fire('Error', body.msg, 'error');
      }
      
    } catch (error) {
      MySwal.fire('Error', error.message, 'error');
    }

  }

}

const login = (user) => ({
  type: types.authLogin,
  payload: user
});

export const startLogout = () => {
  return (dispatch) => {
    dispatch(logout());
  }
}

const logout = () => ({
  type: types.authLogout
});