
export const filterContact = (contacts, term) => {

    const cleanTerm = term.trim().toLowerCase();

    return contacts.filter((contact) => {
      if ((contact.firstName.toLowerCase().includes(cleanTerm) 
          || contact.lastName.toLowerCase().includes(cleanTerm))) {
        return contact;
      }
    })
  }