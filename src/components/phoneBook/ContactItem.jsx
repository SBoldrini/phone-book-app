import { useDispatch } from 'react-redux';

import { uiOpenConfirm, uiOpenModal } from '../../actions/ui';
import { contactSetActive } from '../../actions/contact';

import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faPen } from '@fortawesome/free-solid-svg-icons';



export const ContactItem = (contact) => {

  const {id, firstName, lastName, phone} = contact;

  const dispatch = useDispatch();

  const handleUpdate = () => {
    dispatch(contactSetActive(contact));
    dispatch(uiOpenModal());
  }

  const handleDelete = () => {
    dispatch(contactSetActive(contact));
    dispatch(uiOpenConfirm());
  }

  return (
    <tr className="align-middle">
      <td>{firstName}</td>
      <td>{lastName}</td>
      <td>{phone}</td>
      <td>
        <Button
          variant="outline-warning"
          onClick={handleUpdate}
        >
          <FontAwesomeIcon icon={faPen} /> Update
        </Button>{' '}

        <Button
          variant="outline-danger"
          onClick={handleDelete}
        >
          <FontAwesomeIcon icon={faTrash} /> Delete
        </Button>
      </td>
    </tr>
  )
}
