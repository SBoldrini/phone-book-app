import { useDispatch } from 'react-redux';

import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';

import { uiOpenModal } from '../../actions/ui';
import { contactSetActive } from '../../actions/contact';


export const UpdateContactItem = (contact) => {

  const dispatch = useDispatch();

  const handleUpdate = () => {
    dispatch(contactSetActive(contact));
    dispatch(uiOpenModal());
  }

  return (
    <Button
      variant="outline-warning"
      onClick={handleUpdate}
    >
      <FontAwesomeIcon icon={faPen} /> Update
    </Button>
  )
}
