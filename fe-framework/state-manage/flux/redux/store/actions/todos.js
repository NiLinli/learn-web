const ADD_TODO = 'ADD_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO';

let nextTodoId = 0;
const addTodo = (text) => {
  return {
    type: ADD_TODO,
    text,
    id: nextTodoId++,
  };
};

const toggleTodo = (id) => {
  return {
    type: TOGGLE_TODO,
    id,
  };
};

module.exports = {
  ADD_TODO, TOGGLE_TODO,
  addTodo, toggleTodo
}
