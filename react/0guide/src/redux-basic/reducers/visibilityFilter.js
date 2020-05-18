import * as ActionTypes from '../actions/actionTypes';

const initState = 'SHOW_ALL';

// reducer
export function visibilityFilter(state = initState, action) {
    console.log('visibilityFilter reducer');
    switch (action.type) {
        case ActionTypes.SET_VISIBILITY_FILTER:
            return action.filter;
        default:
            return state;
    }
}