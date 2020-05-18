import * as ActionTypes from '../actions/actionTypes';

const initValue = {
  name: 'nixixi',
  age: 18
};

// 这个地方的初始值 什么时候赋值 ？
export function test(state = initValue, action) {
  console.log(state);
  console.log(action)
  switch (action.type) {
    case ActionTypes.CHANGE_NAME:
      return {
        ...state,
        name: action.payload
      }
    case ActionTypes.CHANGE_AGE:
      return {
        ...state,
        age: action.payload
      }
    default:
      return state;
  }
}