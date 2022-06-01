import { Route, Routes } from 'react-router-dom';

import { PhoneBookPage } from '../components/phoneBook/PhoneBookPage';
import { NavbarComponent } from '../components/ui/NavbarComponent';
import { NotFound } from '../components/ui/NotFound';


export const Dashboard = () => {
  return (
    <>
      <NavbarComponent />

      <Routes>
        <Route path="/" element={<PhoneBookPage />} />
        <Route path="phonebook" element={<PhoneBookPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}
