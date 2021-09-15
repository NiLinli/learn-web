const { ADD_TODO, TOGGLE_TODO } = require('../actions/todos');
const { RESET_STATE } = require('../actions/index');

const getInitState = () => Object.freeze([]);

const todos = (state = getInitState(), action) => {
  switch (action.type) {
    case ADD_TODO:
      // 添加一个 Todo
      return [
        ...state,
        {
          id: action.id,
          completed: false,
          text: action.text,
        },
      ];
    case TOGGLE_TODO:
      // 切换 Todo 状态
      return state.map((todo, id) => {
        if (id === action.id) {
          return Object.assign({}, todo, {
            completed: !todo.completed,
          });
        }
        return todo;
      });
    case RESET_STATE:
      return getInitState();
    default:
      return state;
  }
};

module.exports = todos;
