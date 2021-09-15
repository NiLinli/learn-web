const { createStore, applyMiddleware } = require('redux');
const createReducer = require('./reducers/index');
const thunkMiddleware = require('redux-thunk').default;
const { loggerMiddleware, crashReporter } = require('./middleware/index');

module.exports = (preloadedState) => {
  const store = createStore(
    createReducer({}),
    preloadedState
    // applyMiddleware(
    //   thunkMiddleware,
    //   loggerMiddleware,
    //   crashReporter
    // )
  );

  store.injectReducer = (key, asyncReducer) => {
    store.asyncReducers[key] = asyncReducer;

    // code splitting
    store.replaceReducer(createReducer(this.asyncReducers));
  };

  return { store };
};
