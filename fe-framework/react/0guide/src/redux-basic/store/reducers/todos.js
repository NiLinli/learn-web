import { ADD_TODO, TOGGLE_TODO } from '../actions/todos';

export function todos(state = [], action) {
  console.log('todos reducer');
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
    default:
      return state;
  }
}
