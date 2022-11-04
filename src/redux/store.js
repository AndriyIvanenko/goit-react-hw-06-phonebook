import { configureStore } from '@reduxjs/toolkit';
// import { contactsReducer, filterReducer } from './reducer';
import { contactsReducer } from './contactsSlise';
import { filterReducer } from './filterSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});
