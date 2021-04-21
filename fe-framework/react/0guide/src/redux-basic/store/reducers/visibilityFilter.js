import { SET_VISIBILITY_FILTER } from '../actions/visibilityFilter';

const initState = 'SHOW_ALL';

export function visibilityFilter(state = initState, action) {
  console.log('visibilityFilter reducer');
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
}
