/**
 * 用 { meta: { delay: N } } 来让 action 延迟 N 毫秒。
 * 在这个案例中，让 `dispatch` 返回一个取消 timeout 的函数。
 */
import { Store } from 'redux';

export const timeoutScheduler = (store: Store) => (next: any) => (action: any) => {
    if (!action.meta || !action.meta.delay) {
      return next(action)
    }
  
    const timeoutId = setTimeout(
      () => next(action),
      action.meta.delay
    )
  
    return function cancel() {
      clearTimeout(timeoutId)
    }
  }