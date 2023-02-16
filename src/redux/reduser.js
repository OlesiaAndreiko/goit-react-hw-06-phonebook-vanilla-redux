import initalContacts from '../components/contacts.json';
import { combineReducers } from 'redux';


const contactsInitialState = JSON.parse(localStorage.getItem('contacts')) ?? initalContacts;

const contactsReducer = (state = contactsInitialState, action) => {
  switch (action.type) {
    case 'contact/addContact':
      return [...state, action.payload];

    case 'contact/deleteContact':
      return state.filter(contact => contact.id !== action.payload);

    default:
      return state;
  }
};


const filtersInitialState = '';

const filtersReducer = (state = filtersInitialState, action) => {
  switch (action.type) {
    case 'filters/searchContact':
      return action.payload;

    default:
      return state;
  }
};


export const rootReducer = combineReducers({
  contacts: contactsReducer,
  filters: filtersReducer,
});
