import { VisibilityFilters } from '../actions/actions';
import { ActionTypes } from '../actions/actionTypes';

// reducer
export function visibilityFilter(state = VisibilityFilters.SHOW_ALL, action: any) {
    console.log('visibilityFilter reducer');
    switch (action.type) {
        case ActionTypes.SET_VISIBILITY_FILTER:
            return action.filter;
        default:
            return state;
    }
}