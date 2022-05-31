import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({children}) => {

  const {logged} = useSelector(state => state.auth);
  
  useEffect(() => {
    localStorage.getItem('logged');
  }, [logged])

  

  return logged
    ? children
    : <Navigate to="/auth/login" replace={true} />
}
