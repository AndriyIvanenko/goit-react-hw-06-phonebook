// import { combineReducers } from 'redux';
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

// const contactsReducer = (state = initialContacts, action) => {
// //   export const contactsReducer = (state = initialContacts, action) => {
export const contactsReducer = createReducer(
  initialContacts,
  {
    //   switch (action.type) {
    // //   case 'contacts/addContact':
    //   case addContact.type: {
    [addContact.type]: (state, action) => {
      const updatedContacts = [...state, action.payload];
      localStorage.setItem('contacts', JSON.stringify(updatedContacts));
      return updatedContacts;
    },
    //   case 'contacts/deleteContact':
    // //   case deleteContact.type: {
    //   case deleteContact.type: {
    [deleteContact.type]: (state, action) => {
      const updatedContacts = state.filter(contact => contact.id !== action.payload);
      localStorage.setItem('contacts', JSON.stringify(updatedContacts));
      return updatedContacts;
    },
    // default:
    //   return state;
  }
  // };
);

const initialFilterValue = {
  value: '',
};

// //  const filterReducer = (state = initialFilterValue, action) => {
// export const filterReducer = (state = initialFilterValue, action) => {
export const filterReducer = createReducer(
  initialFilterValue,
  {
    //   switch (action.type) {
    // //  case 'contacts/filterContacts':
    // case filterContacts.type:
    [filterContacts.type]: (state, action) => {
      return {
        value: action.payload,
      };
      // default:
      //   return state;
    },
  }
  // };
);

// export const rootReducer = combineReducers({
//   contacts: contactsReducer,
//   filter: filterReducer,
// });
