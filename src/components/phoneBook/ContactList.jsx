import Table from 'react-bootstrap/Table';
import { useSelector } from 'react-redux';
import { ContactItem } from './ContactItem';

export const ContactList = () => {

  const {contacts} = useSelector(state => state.contacts);


  return (
    <Table  hover className="mt-3 text-center">
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Phone</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {
          contacts.map(contact => (
            <ContactItem 
              key={contact.id}
              {...contact}
            />
          ))
        }
      </tbody>
    </Table>
  )
}
