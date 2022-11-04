import { addContact, deleteContact, filterContacts } from './actions';
import { createReducer } from '@reduxjs/toolkit';

const contacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

if (!localStorage.getItem('contacts')) {
  localStorage.setItem('contacts', JSON.stringify(contacts));
}

const initialContacts = localStorage.getItem('contacts')
  ? JSON.parse(localStorage.getItem('contacts'))
  : [];

export const contactsReducer = createReducer(initialContacts, {
  [addContact.type]: (state, action) => {
    const updatedContacts = [...state, action.payload];
    localStorage.setItem('contacts', JSON.stringify(updatedContacts));
    return updatedContacts;
  },
  [deleteContact.type]: (state, action) => {
    const updatedContacts = state.filter(contact => contact.id !== action.payload);
    localStorage.setItem('contacts', JSON.stringify(updatedContacts));
    return updatedContacts;
  },
});

const initialFilterValue = {
  value: '',
};

export const filterReducer = createReducer(initialFilterValue, {
  [filterContacts.type]: (state, action) => {
    return {
      value: action.payload,
    };
  },
});
