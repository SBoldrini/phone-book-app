import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';


export const PublicRoute = ({children}) => {

  const {email:user} = useSelector(state => state.auth);

  useEffect(() => {
    localStorage.getItem('user');
  }, [user])

  return user
    ? <Navigate to="/phonebook" replace={true} />
    : children
}
