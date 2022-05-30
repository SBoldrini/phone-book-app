import { Route, Routes } from 'react-router-dom';
import { PhoneBookPage } from '../components/phoneBook/PhoneBookPage';
import { NavbarComponent } from '../components/ui/NavbarComponent';


export const Dashboard = () => {
  return (
    <>
      <NavbarComponent />

      <Routes>
        <Route path="phonebook" element={<PhoneBookPage />} />
        <Route path="/" element={<PhoneBookPage />} />
      </Routes>
    </>
  )
}
