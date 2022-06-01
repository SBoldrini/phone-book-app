import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { AuthRouter } from './AuthRouter';
import { Dashboard } from './Dashboard';
import { NotFound } from '../components/ui/NotFound';


export const AppRouter = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="auth/*" element={
          <PublicRoute>
            <AuthRouter />
          </PublicRoute>
        }/>

        <Route path="/*" element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }/>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}
