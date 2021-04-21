import { SELECT_SUBREDDIT } from '../actions/selected';

// 处理 action 更新 selectedSubreddit 部分 state
export function selectedSubreddit(state = 'reactjs', action) {
  console.log('selected reducer');
  switch (action.type) {
    case SELECT_SUBREDDIT:
      return action.subreddit;
    default:
      return state;
  }
}
