import { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

import { ConfirmModal } from './ConfirmModal';
import { ContactList } from './ContactList';
import { ContactModal } from './ContactModal';

import { startLoadContact } from '../../actions/contact';


export const PhoneBookPage = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startLoadContact())
  }, [dispatch])


  return (
      <Container>
        <h1 className='mt-3'>Phone Book App</h1>
        <ContactList />
        <ContactModal />
        <ConfirmModal />
      </Container>
  )
}
