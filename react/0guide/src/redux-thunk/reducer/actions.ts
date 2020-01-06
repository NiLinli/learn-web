// import fetch from 'cross-fetch';

export enum ActionType {
  REQUEST_POSTS = 'REQUEST_POSTS',
  RECEIVE_POSTS = 'RECEIVE_POSTS',
  SELECT_SUBREDDIT = 'SELECT_SUBREDDIT',
  INVALIDATE_SUBREDDIT = 'INVALIDATE_SUBREDDIT',
}

// 同步 action 1 - 选择 reddit 话题
export function selectSubreddit(subreddit: any) {
  return {
    type: ActionType.SELECT_SUBREDDIT,
    subreddit
  }
}

export function invalidateSubreddit(subreddit: any) {
  return {
    type: ActionType.INVALIDATE_SUBREDDIT,
    subreddit
  }
}

// 请求数据
function requestPosts(subreddit: any) {
  return {
    type: ActionType.REQUEST_POSTS,
    subreddit
  }
}

// 请求成功 收到数据
function receivePosts(subreddit: any, json: any) {
  return {
    type: ActionType.RECEIVE_POSTS,
    subreddit,
    posts: json.data.children.map((child: any) => child.data),
    receivedAt: Date.now()
  }
}




// thunk action 
// 当 action 创建函数返回函数时，这个函数会被 Redux Thunk middleware 执行
// 这个函数并不需要保持纯净；它还可以带有副作用，包括执行异步 API 请求
// 这个函数还可以 dispatch action，就像 dispatch 前面定义的同步 action 一样
function fetchPosts(subreddit: any) {

  // Thunk middleware 知道如何处理函数
  // 这里把 dispatch 方法通过参数的形式传给函数
  // 以此来让它自己也能 dispatch action
  return (dispatch: any) => {

    // 开始请求数据
    dispatch(requestPosts(subreddit));

    // thunk middleware 调用的函数可以有返回值，
    // 它会被当作 dispatch 方法的返回值传递。

    // 这个案例中，我们返回一个等待处理的 promise。
    // 这并不是 redux middleware 所必须的，但这对于我们而言很方便。
    return fetch(`https://www.reddit.com/r/${subreddit}.json`)
      .then(
        response => response.json(),
        // 不要使用 catch，因为会捕获在 dispatch 和渲染中出现的任何错误，导致 'Unexpected batch number' 错误。
        // https://github.com/facebook/react/issues/6895
        error => {
          // 处理错 HTTP 错误信息
          console.log('An error occur', error)
        }
      )
      .then(json => {
     
        // 成功 dispatch 状态
        dispatch(receivePosts(subreddit, json))
      })
  }
}

function shouldFetchPosts(state: any, subreddit: any) {
  const posts = state.postsBySubreddit[subreddit]
  if (!posts) {
    return true
  } else if (posts.isFetching) {
    return false
  } else {
    return posts.didInvalidate
  }
}

export function fetchPostsIfNeeded(subreddit: any) {

  // 注意这个函数也接收了 getState() 方法
  // 它让你选择接下来 dispatch 什么
  // 当缓存的值是可用时，减少网络请求很有用

  return (dispatch: any, getState: any) => {
    if (shouldFetchPosts(getState(), subreddit)) {
      // 在 thunk 里 dispatch 另一个 thunk！
      return dispatch(fetchPosts(subreddit));
    } else {
      return Promise.resolve();
    }
  }
}