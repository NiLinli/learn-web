import { CHANGE_NAME, CHANGE_AGE } from '../actions/user';

const initValue = {
  name: 'nixixi',
  age: 18,
};

// 这个地方的初始值 什么时候赋值 ？
export function user(state = initValue, action) {
  console.log('user reducer');
  switch (action.type) {
    case CHANGE_NAME:
      return {
        ...state,
        name: action.payload,
      };
    case CHANGE_AGE:
      return {
        ...state,
        age: action.payload,
      };
    default:
      return state;
  }
}
