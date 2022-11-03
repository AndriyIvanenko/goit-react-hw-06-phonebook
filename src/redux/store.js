import createStore from 'redux';

const initialState = {
  contactList: localStorage.getItem('contacts')
    ? JSON.parse(localStorage.getItem('contacts'))
    : [],
  filter: '',
};

const rootReducer = (state = initialState, action) => {
  return state;
};

export const store = createStore(rootReducer);
