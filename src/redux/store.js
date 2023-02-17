import { createStore } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';
import { rootReducer} from './reduser';
// import { persistStore } from 'redux-persist'
// import initalContacts from '../components/contacts.json';

// const contactsInitialState = JSON.parse(localStorage.getItem('contacts')) ?? initalContacts;


// export const store = createStore(rootReducer, {
//     contacts: {
//         items: contactsInitialState,
//     }
// }, enhancer);
// export const persistor = persistStore(store)

const enhancer = devToolsEnhancer();
export const store = createStore(rootReducer, enhancer);