import { useState } from 'react';
import { useSelector } from 'react-redux';
import { ContactItem } from './ContactItem';

import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import { filterContact } from '../../helpers/filterContacts';


export const ContactList = () => {

  const {contacts} = useSelector(state => state.contacts);

  const [term, setTerm] = useState('');

  const handleInputChange = (e) => {
    setTerm(e.target.value);
  }

  const handleSearch = (e) => {
    e.preventDefault();
  }

  return (
    <>
      <Form className="mt-3"  onSubmit={handleSearch} >
          <Form.Control 
            type="text" 
            placeholder="Search contacts..." 
            value={term}
            onChange={handleInputChange}
            autoComplete="false"
            autoFocus="on"
          />
        </Form>

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
            term ? filterContact(contacts, term).map(contact => (
              <ContactItem 
                key={contact.id}
                {...contact}
              />))
              : contacts.map(contact => (<ContactItem 
                key={contact.id}
                {...contact}
                />))
          }
        </tbody>
      </Table>
    </>

  )
}
