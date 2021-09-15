const { combineReducers } = require('redux');
const todos = require('./todos');
const user = require('./user');

const staticReducers = {
  todos,
  user,
};

function createReducer(asyncReducers) {
  const appReducer = combineReducers({
    ...staticReducers,
    ...asyncReducers
  });

  // combineReducers 结果
  // const appReducer = function combination(state, action) {
  //   return {
  //     todos: todos(state.todos, action),
  //     ...
  //   };
  // };

  return appReducer;
}

module.exports = createReducer;
