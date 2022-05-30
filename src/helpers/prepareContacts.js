
export const prepareContacts = (contacts = []) => {

  return contacts.map(
    (contact) => ({
      ...contact
    })
  );
}