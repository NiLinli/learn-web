import { combineReducers } from 'redux';
import { ActionType } from './actions';

// 处理 action 更新 selectedSubreddit 部分 state
function selectedSubreddit(state = 'reactjs', action: any) {
    switch (action.type) {
        case ActionType.SELECT_SUBREDDIT:
            return action.subreddit;
        default:
            return state;
    }
}

// 我们提取出 posts(state, action) 来管理指定帖子列表的 state
function posts(
    state = {
        isFetching: false,
        didInvalidate: false,
        items: []
    },
    action: any
) {
    switch (action.type) {
        case ActionType.INVALIDATE_SUBREDDIT:
            return Object.assign({}, state, {
                didInvalidate: true
            });
        case ActionType.REQUEST_POSTS:
            return Object.assign({}, state, {
                isFetching: true,
                didInvalidate: false
            });
        case ActionType.RECEIVE_POSTS:
            return Object.assign({}, state, {
                isFetching: false,
                didInvalidate: false,
                items: action.posts,
                lastUpdated: action.receivedAt
            });
        default:
            return state;
    }
}

// 处理 action, 更新 postsBySubreddit 部分 state
// flat action: 逻辑都写在 action 中, 通过参数传递到 reducer 中来, reducer 直接更新 state
// thin action: reducer 写逻辑, 然后更新 state
function postsBySubreddit(state = {}, action: any) {
    switch (action.type) {
        case ActionType.INVALIDATE_SUBREDDIT:
        case ActionType.RECEIVE_POSTS:
        case ActionType.REQUEST_POSTS:
            return Object.assign({}, state, {
                [action.subreddit]: posts(state[action.subreddit], action)      // 
            });
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    postsBySubreddit,
    selectedSubreddit
});

export default rootReducer;