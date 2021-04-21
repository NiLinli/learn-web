import { createStore, applyMiddleware } from 'redux';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from './reducers/index';

// middleware
import thunkMiddleware from 'redux-thunk';
import { loggerMiddleware } from './middleware';

// const persistConfig = {
//   key: 'root1',
//   storage,
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer); // 1

export default (preloadedState) => {
  const store = createStore(
    // persistedReducer,
    rootReducer,
    preloadedState,
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware
    )
  );
  const persistor = persistStore(store); // 2
  return {
    store,
    persistor,
  };
};
