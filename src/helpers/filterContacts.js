
export const filterContact = (contacts, term) => {
    return contacts.filter((contact) => {
      if ((contact.firstName.toLowerCase() || contact.lastName.toLowerCase()).includes(term.toLowerCase())) {
        return contact;
      }
    })
  }