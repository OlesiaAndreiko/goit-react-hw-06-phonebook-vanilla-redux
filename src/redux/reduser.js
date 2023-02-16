import initalContacts from '../components/contacts.json';

const initialState = {
  contacts: JSON.parse(localStorage.getItem('contacts')) ?? initalContacts,
  filters: '',
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'contact/addContact': {
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };
    }

    case 'contact/deleteContact': {
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        ),
      };
    }

    case 'filters/searchContact': {
      return {
        ...state,
        filters: action.payload,
      };
    }

    default:
      return state;
  }
};
