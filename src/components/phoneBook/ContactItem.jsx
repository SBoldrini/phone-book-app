import { DeleteContactItem } from "./DeleteContactItem"
import { UpdateContactItem } from "./UpdateContactItem"

export const ContactItem = ({id, firstName, lastName, phone}) => {
  return (
    <tr>
      <td>{firstName}</td>
      <td>{lastName}</td>
      <td>{phone}</td>
      <td>
        <UpdateContactItem id={id} /> {' '}
        <DeleteContactItem id={id} />
      </td>
    </tr>
  )
}
