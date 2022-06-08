import { useDispatch, useSelector } from 'react-redux';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import { contactClearActive, startDeleteContact } from '../../actions/contact';
import { uiCloseConfirm } from '../../actions/ui';


export const ConfirmModal = () => {

  const dispatch = useDispatch();
  const {isConfirmOpen} = useSelector(state => state.ui);
  const {activeContact} = useSelector(state => state.contacts);

  const {firstName, lastName} = !!activeContact && activeContact;


  const closeConfirm = () => {
    dispatch(contactClearActive());
    dispatch(uiCloseConfirm());

  }

  const handleDelete = () => {
    dispatch(startDeleteContact());
    dispatch(uiCloseConfirm());
    dispatch(contactClearActive());
  }

  return (

    <Modal
      show={isConfirmOpen}
      onHide={closeConfirm}
      centered={true}
    >
      <Modal.Header closeButton>
        <Modal.Title>
          Detete a Contact
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>Are you sure you want to delete the contact <b>{firstName} {lastName}</b> ?</p>
      </Modal.Body>

      <Modal.Footer>
          <Button 
            variant="outline-danger"
            onClick={handleDelete}
          >
            Confirm
          </Button>

      </Modal.Footer>

    </Modal>
  )
}
