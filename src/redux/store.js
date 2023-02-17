import { createStore } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';
import { rootReducer} from './reduser';
import { persistStore } from 'redux-persist'



const enhancer = devToolsEnhancer();
export const store = createStore(rootReducer, enhancer);
export const persistor = persistStore(store)


