import { combineReducers } from 'redux';

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

const contactsReducer = (state = initialContacts, action) => {
  switch (action.type) {
    case 'contacts/addContact': {
      const updatedContacts = [...state, action.payload];
      localStorage.setItem('contacts', JSON.stringify(updatedContacts));
      return updatedContacts;
    }
    case 'contacts/deleteContact': {
      const updatedContacts = state.filter(contact => contact.id !== action.payload);
      localStorage.setItem('contacts', JSON.stringify(updatedContacts));
      return updatedContacts;
    }
    default:
      return state;
  }
};

const initialFilterValue = {
  value: '',
};

const filterReducer = (state = initialFilterValue, action) => {
  switch (action.type) {
    case 'contacts/filterContacts':
      return {
        value: action.payload,
      };
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});
