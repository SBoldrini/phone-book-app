import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';

import { useDispatch } from 'react-redux';
import { uiOpenModal } from '../../actions/ui';


export const UpdateContactItem = () => {

  const dispatch = useDispatch();

  const handleUpdate = () => {
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
