const { combineReducers } = require('redux');
const todos = require('./todos');

const appReducer = combineReducers({
  todos,
});

// combineReducers 结果
// const appReducer = function combination(state, action) {
//   return {
//     todos: todos(state.todos, action),
//   };
// };

module.exports = appReducer;
