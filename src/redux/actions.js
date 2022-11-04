import { createAction, nanoid } from '@reduxjs/toolkit';

export const addContact = createAction('contacts/addContact', (name, number) => {
  return {
    payload: {
      id: nanoid(),
      name: name,
      number: number,
    },
  };
});

export const deleteContact = createAction('contacts/deleteContact');

export const filterContacts = createAction('contacts/filterContacts');
