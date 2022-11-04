import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

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

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialContacts,
  reducers: {
    addContact: {
      reducer(state, action) {
        if (state.find(contact => contact.name === action.payload.name)) {
          alert(`${action.payload.name} is already in contacts`);
          return;
        }
        const updatedContacts = [...state, action.payload];
        localStorage.setItem('contacts', JSON.stringify(updatedContacts));
        return updatedContacts;
      },
      prepare(name, number) {
        return {
          payload: {
            id: nanoid(),
            name: name,
            number: number,
          },
        };
      },
    },
    deleteContact(state, action) {
      const updatedContacts = state.filter(contact => contact.id !== action.payload);
      localStorage.setItem('contacts', JSON.stringify(updatedContacts));
      return updatedContacts;
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
