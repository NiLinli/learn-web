import {  REQUEST_POSTS, RECEIVE_POSTS } from '../actions/posts';

// 我们提取出 posts(state, action) 来管理指定帖子列表的 state
function posts(
  state = {
    isFetching: false,
    items: [],
  },
  action
) {
  switch (action.type) {
    case REQUEST_POSTS:
      return Object.assign({}, state, {
        isFetching: true,
        
      });
    case RECEIVE_POSTS:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.posts,
        lastUpdated: action.receivedAt,
      });
    default:
      return state;
  }
}

// 处理 action, 更新 postsBySubreddit 部分 state
// flat action: 逻辑都写在 action 中, 通过参数传递到 reducer 中来, reducer 直接更新 state
// thin action: reducer 写逻辑, 然后更新 state
export function postsBySubreddit(state = {}, action) {
  switch (action.type) {
    case RECEIVE_POSTS:
    case REQUEST_POSTS:
      return Object.assign({}, state, {
        [action.subreddit]: posts(state[action.subreddit], action), //
      });
    default:
      return state;
  }
}
