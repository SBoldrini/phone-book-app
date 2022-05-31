
export const filterContact = (contacts, term) => {
    const result = contacts.filter((contact) => {
      if ((contact.firstName.toLowerCase() || contact.lastName.toLowerCase()).includes(term.toLowerCase())) {
        return contact;
      }
    })
    return result;
  }