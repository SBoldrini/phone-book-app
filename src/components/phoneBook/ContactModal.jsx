import { useDispatch, useSelector } from 'react-redux';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave } from '@fortawesome/free-solid-svg-icons';
import { Form } from 'react-bootstrap';

import { uiCloseModal } from '../../actions/ui';
import { contactClearActive, startAddNewContact, startUpdateContact } from '../../actions/contact';
import { useEffect, useState } from 'react';


const initContact = {
  firstName: '',
  lastName: '',
  phone: ''
}

export const ContactModal = () => {

  const dispatch = useDispatch();

  const {isModalOpen} = useSelector(state => state.ui);
  const {activeContact} = useSelector(state => state.contacts);


  const [modalValues, setModalValues] = useState(initContact);

  const {firstName, lastName, phone} = modalValues;

  useEffect(() => {
    if (!!activeContact) {
      setModalValues({...activeContact});
    } else {
      setModalValues(initContact);
    }
  }, [activeContact, setModalValues]);

  const handleInputChange = ({target}) => {
    setModalValues({
      ...modalValues,
      [target.name]: target.value
    });
  }
  

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!!activeContact) {
      dispatch(startUpdateContact(modalValues));
    } else {
      dispatch(startAddNewContact(modalValues));
    }
    dispatch(contactClearActive());
    dispatch(uiCloseModal());

  }

  const closeModal = () => {
    dispatch(contactClearActive());
    dispatch(uiCloseModal());
    setModalValues(initContact);
  }

  return (
    <Modal
      show={isModalOpen}
      onHide={closeModal}
      centered={true}
    >
    <Modal.Header closeButton>
        <Modal.Title>
          { (activeContact) ? 'Edit Contact' : 'New Contact' }
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form
          onSubmit={handleSubmit}
        >
          <Form.Group className='mb-3'>
          <Form.Control 
            type="text"
            placeholder="First Name"
            required
            autoComplete="off"
            name="firstName"
            value={firstName}
            onChange={handleInputChange}
          />
          </Form.Group>
          
          <Form.Group className='mb-3'>
          <Form.Control 
            type="text"
            placeholder="Last Name"
            required
            autoComplete="off"
            name="lastName"
            value={lastName}
            onChange={handleInputChange}
          />
          </Form.Group>
          
          <Form.Group className='mb-3'>
          <Form.Control 
            type="text"
            placeholder="Phone"
            required
            autoComplete="off"
            name="phone"
            value={phone}
            onChange={handleInputChange}
          />
          </Form.Group>

          <Button type='submit' >
            <FontAwesomeIcon icon={faSave} /> Save
          </Button>
        </Form>
      </Modal.Body>

    </Modal>
  )
}
