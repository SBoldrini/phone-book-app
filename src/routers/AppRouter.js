import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import { AuthRouter } from './AuthRouter';
// import { PhoneBookPage } from '../components/phoneBook/PhoneBookPage';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { Dashboard } from './Dashboard';
import { LoginPage } from '../components/auth/LoginPage';


export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={
          <PublicRoute>
            <LoginPage />
          </PublicRoute>
        }/>

        <Route path="/*" element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }/>
      </Routes>
    </BrowserRouter>
  )
}
