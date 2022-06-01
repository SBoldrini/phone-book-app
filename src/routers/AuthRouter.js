import { Route, Routes } from 'react-router-dom';

import { LoginPage } from '../components/auth/LoginPage';
import { RegisterPage } from '../components/auth/RegisterPage';
import { NotFound } from '../components/ui/NotFound';


export const AuthRouter = () => {

  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}
