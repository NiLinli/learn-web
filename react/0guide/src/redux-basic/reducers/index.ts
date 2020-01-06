import { combineReducers } from 'redux';
import { todos } from './todos';
import { visibilityFilter } from './visibilityFilter';
import { test } from './test'
import { ActionTypes } from '../actions/actionTypes';

import { persistReducer } from 'redux-persist';

import storage from 'redux-persist/lib/storage'


const testPersistConfig = {
  key: 'test',
  storage
}


const appReducer = combineReducers({
  todos ,
  visibilityFilter,
  test:persistReducer(testPersistConfig, test)
});

const rootReducer  = (state: any, action: any) => {

  if (action.type === ActionTypes.LOG_OUT) {
    state = undefined
  } 

  return appReducer(state, action);

}

// 所做的只是生成一个函数
// 这个函数来调用你的一系列 reducer
// 每个 reducer 根据它们的 key 来筛选出 state 中的一部分数据并处理
// 然后这个生成的函数再将所有 reducer 的结果合并成一个大的对象
// 所以等效于

// const todoApp = (state:any = {}, action:any) => {
//   return {
//     visibilityFilter: visibilityFilter(state.visibilityFilter, action),   // 拆分调用
//     todos: todos(state.todos, action)
//   }
// }

export default rootReducer;