import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

import { types } from '../types/types';
import { fetchForm } from '../helpers/fetch';

const MySwal = withReactContent(Swal);


export const startLoadContact = () => {
  return async(dispatch) => {

    try {

      const resp = await fetchForm('api/contacts');
      const body = await resp.json();

        dispatch(contactLoaded(body.contacts));
      
    } catch (error) {
      MySwal.fire('Error', 'error.message', 'error');
    }
  }
}

const contactLoaded = (contacts) => ({
  type: types.contactLoaded,
  payload: contacts
});


export const startAddNewContact = (contact) => {
  return async(dispatch) => {

    try {
      
      const resp = await fetchForm('api/contacts', contact, 'POST');
      const body = await resp.json();

      if (body.ok) {
        dispatch(contactAddNew(contact));
      } 

    } catch (error) {
      MySwal.fire('Error', error.message, 'error');
    }

  }
}

const contactAddNew = (contact) => ({
  type: types.contactAddNew,
  payload: contact
});


export const contactSetActive = (contact) => ({
  type: types.contactSetActive,
  payload: contact
});

export const contactClearActive = () => ({
  type: types.contactClearActive
});


export const startUpdateContact = (contact) => {
  return async(dispatch, getState) => {

    const {id} = getState().contacts.activeContact;

    try {

      const resp = await fetchForm(`api/contacts/${id}`, contact, 'PUT');
      const body = await resp.json();

      if (body.ok) {
        dispatch(contactUpdated(contact));
      } else {
        MySwal.fire('Error', body.msg, 'error');
      }

      
    } catch (error) {
      MySwal.fire('Error', error.message, 'error');
    }
  }
}


const contactUpdated = (contact) => ({
  type: types.contactUpdated,
  payload: contact
})


export const startDeleteContact = (id) => {
  return async(dispatch) => {


    try {
     
      const resp = await fetchForm(`api/contacts/${id}`, {}, 'DELETE');
      const body =  await resp.json();

      if(body.ok) {
        dispatch(contactDeleted(id));
      } else {
        MySwal.fire('Error', body.msg, 'error');
      }

    } catch (error) {
      MySwal.fire('Error', error.message, 'error');
    }
  }
} 


const contactDeleted = (id) => ({
  type: types.contactDeleted,
  payload: id
});


export const contactLogout = () => ({
  type: types.contactLogout
});


