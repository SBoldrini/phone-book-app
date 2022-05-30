import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';


export const PublicRoute = ({children}) => {

  const {logged} = useSelector(state => state.auth);

  return logged
    ? <Navigate to="/phonebook" replace={true} />
    : children
}
