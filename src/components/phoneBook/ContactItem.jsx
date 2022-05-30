import { DeleteContactItem } from './DeleteContactItem';
import { UpdateContactItem } from './UpdateContactItem';

export const ContactItem = ({id, firstName, lastName, phone}) => {

  return (
    <tr className="align-middle">
      <td>{firstName}</td>
      <td>{lastName}</td>
      <td>{phone}</td>
      <td>
        <UpdateContactItem
          id={id}
          firstName={firstName}
          lastName={lastName}
          phone={phone} 
        /> {' '}
        <DeleteContactItem id={id} />
      </td>
    </tr>
  )
}
