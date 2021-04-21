import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// reducer
import { todos } from './todos';
import { visibilityFilter } from './visibilityFilter';
import { user } from './user';
import { selectedSubreddit } from './selected';
import { postsBySubreddit } from './posts';

// action
import { LOG_OUT } from '../actions/index';

const userPersistConfig = {
  key: 'user',
  storage,
};

const appReducer = combineReducers({
  todos,
  visibilityFilter,
  selectedSubreddit,
  postsBySubreddit,
  user: persistReducer(userPersistConfig, user),
});


// 等效果于
// combineReducers 是一个高阶函数
// appReducer 是返回值 wrapper function
// const appReducer = function combination(state, action) {
//   // 子 reducer 发生改变, 就返回一个新的 state
//   return {
//     todos: todos(state.todos, action),
//     visibilityFilter: visibilityFilter(state.visibilityFilter, action),
//     // ...
//   };
//   // 子 reducer 如果都没有更新
//   return state;
// };


// 分发 action, 调用 root reducer 函数
const rootReducer = (state, action) => {

  console.log('root reducer');
  if (action.type === LOG_OUT) {
    // 改写了传入到 root reducer 的 state
    state = undefined;
  }

  return appReducer(state, action);
};

export default rootReducer;
