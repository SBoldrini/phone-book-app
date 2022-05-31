import { fetchForm } from "../helpers/fetch";
import { types } from "../types/types";

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
        console.log(body.msg)
        //TODO: Finalizar manejo de errores en pantalla
      }
      
    } catch (error) {
      console.log(error);
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
        console.log(body.msg)
        //TODO: Finalizar manejo de errores en pantalla
      }
      
    } catch (error) {
      console.log(error)
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