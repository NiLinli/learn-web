export const loggerMiddleware = function (store) {
  return function (next) {
    return function (action) {
      console.group(action.type);
      console.info('dispatching', action);
      const result = next(action);
      console.log('next state', store.getState());
      console.groupEnd();
      return result;
    };
  };
};
