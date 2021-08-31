const { createStore, applyMiddleware } = require('redux');
const rootReducer = require('./reducers/index');
const thunkMiddleware = require('redux-thunk').default;
const { loggerMiddleware, crashReporter }= require('./middleware/index');

module.exports = (preloadedState) => {
  const store = createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware,
      crashReporter
    )
  );

  return { store };
};
