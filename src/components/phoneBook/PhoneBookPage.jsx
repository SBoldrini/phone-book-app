import { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

import { SearchContact } from './SearchContact';

import { startLoadContact } from '../../actions/contact';
import { ContactList } from './ContactList';
import { ContactModal } from './ContactModal';

export const PhoneBookPage = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startLoadContact())
  }, [dispatch])
  

  return (
      <Container>
        <h1 className='mt-3'>Phone Book App</h1>
        <SearchContact />

        <ContactList />

        <ContactModal />
      </Container>
  )
}
