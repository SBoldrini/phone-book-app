import { useDispatch, useSelector } from 'react-redux';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave } from '@fortawesome/free-solid-svg-icons';
import { Form } from 'react-bootstrap';

import { useForm } from '../../hooks/useForm';
import { uiCloseModal } from '../../actions/ui';
import { startAddNewContact, startUpdateContact } from '../../actions/contact';

export const ContactModal = () => {

  const dispatch = useDispatch();

  const {isModalOpen} = useSelector(state => state.ui);
  const {activeContact} = useSelector(state => state.contacts);

  const [modalValues, handleInputChange] = useForm({
    firstName: '',
    lastName: '',
    phone: ''
  });

  const {firstName, lastName, phone} = modalValues;

  const handleSubmit = () => {
    console.log('Submit del modal')

    // if (id === '') {
    //   dispatch(startAddNewContact(modalValues));
    // } else {
    //   dispatch(startUpdateContact(modalValues));
    // }
  }

  return (
    <Modal
      show={isModalOpen}
      onHide={() => {dispatch(uiCloseModal())}}
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
            value={phone}
            onChange={handleInputChange}
          />
          </Form.Group>

          <Button>
            <FontAwesomeIcon icon={faSave} /> Save
          </Button>
        </Form>
      </Modal.Body>

    </Modal>
  )
}
