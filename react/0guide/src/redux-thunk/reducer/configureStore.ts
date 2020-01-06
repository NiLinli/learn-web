import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
// import { createLogger } from 'redux-logger';
import rootReducer from './reducers';
import { loggerMiddleware0 } from './middleware/logger.middleware';

// const loggerMiddleware = createLogger();

export default function configureStore(preloadedState?: any) {
  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(
      thunkMiddleware,    // 支持 dispatch 函数
      // loggerMiddleware    // 打印 action 日志
      loggerMiddleware0
    )
  )
}