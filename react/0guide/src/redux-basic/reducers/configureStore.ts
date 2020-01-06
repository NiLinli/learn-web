import { createStore } from 'redux';
import rootReducer from './index';


import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'



const persistConfig = {
    key: 'root1',
    storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer);        // 1 



export default (preloadedState?: any) => {

    const store = createStore(persistedReducer);
    const persistor = persistStore(store);         // 2
    return {
        store, persistor
    };
} 