import initalContacts from '../components/contacts.json';
import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { persistReducer } from 'redux-persist';

const contactsInitialState = initalContacts;
// const contactsInitialState = JSON.parse(localStorage.getItem('contacts')) ?? initalContacts;

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

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['contacts'],
};

const persistedReducer = 
persistReducer(persistConfig, contactsReducer);

export const rootReducer = combineReducers({
  contacts: persistedReducer,
  filters: filtersReducer,
});
