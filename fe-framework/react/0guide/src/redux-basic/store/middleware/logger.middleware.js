export const loggerMiddleware = function (store) {
  // next: 旧的 dispatch
  // 返回值: 新的 dispatch
  return function (next) {
    return function dispatch(action) {

      console.log('loggerMiddleware');

      console.group(action.type);
      console.info('dispatching', action);
      const result = next(action);
      console.log('next state', store.getState());
      console.groupEnd();
      return result;
    };
  };
};
