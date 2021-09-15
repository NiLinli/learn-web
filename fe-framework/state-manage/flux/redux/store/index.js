const { bindActionCreators } = require('redux');

const configureStore = require('./configureStore');
const { store } = configureStore();

// action
const { addTodo } = require('./actions/todos');
const { resetState } = require('./actions/index');
const { changeName } = require('./actions/user');
const boundResetState = bindActionCreators(resetState, store.dispatch);

// selector
const { userNameSelector, upperCaseUseNameSelector } = require('./selectors/user');

store.dispatch(addTodo('the whether is fine!'));
console.log(store.getState());

store.dispatch(changeName('nilinli'));
console.log(store.getState());
// reselect
console.log(userNameSelector(store.getState()));
console.log(userNameSelector(store.getState()));
console.log(upperCaseUseNameSelector(store.getState()));
console.log(upperCaseUseNameSelector(store.getState()));

boundResetState();
console.log(store.getState());
