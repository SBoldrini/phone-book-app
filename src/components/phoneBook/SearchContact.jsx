import { useState } from 'react';
import { useSelector } from 'react-redux';

import Form from 'react-bootstrap/Form';


export const SearchContact = () => {

  const {contacts} = useSelector(state => state.contacts);

  const [value, setValue] = useState('');

  const handleInputChange = (e) => {
    setValue(e.target.value);
  }

  const handleSearch = (e) => {
    e.preventDefault();

    console.log('handleSerch')

    // if(value.trim().length > 1) {
    //   // TODO: implementar busqueda
    // }
  }

  return (
    <>
      <Form className="mt-3"  onSubmit={handleSearch} >
        <Form.Control 
          type="text" 
          placeholder="Search contacts..." 
          value={value}
          onChange={handleInputChange}
          autoComplete="false"
          autoFocus="on"
        />
      </Form>

      {/* <ContactList contacts={}/>  terminar de definir */}
    </>
  )
}
