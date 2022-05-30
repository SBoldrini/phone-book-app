import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { contactSetActive, startDeleteContact } from '../../actions/contact';


export const DeleteContactItem = ({id}) => {

  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(startDeleteContact(id));
  }

  return (
    <Button
      variant="outline-danger"
      onClick={handleDelete}
    >
      <FontAwesomeIcon icon={faTrash} /> Delete
    </Button>
  )
}
