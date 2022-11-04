// import { nanoid } from 'nanoid';
import { createAction, nanoid } from '@reduxjs/toolkit';

// export const addContact = (name, number) => {
export const addContact = createAction('contacts/addContact', (name, number) => {
  return {
    // type: 'contacts/addContact',
    payload: {
      id: nanoid(),
      name: name,
      number: number,
    },
  };
});

// export const deleteContact = contactId => {
//   return {
//     type: 'contacts/deleteContact',
//     payload: contactId,
//   };
// };
export const deleteContact = createAction('contacts/deleteContact');

// export const filterContacts = filterValue => {
//   return {
//     type: 'contacts/filterContacts',
//     payload: filterValue,
//   };
// };
export const filterContacts = createAction('contacts/filterContacts');
