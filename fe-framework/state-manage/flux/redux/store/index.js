const configureStore = require('./configureStore');

const { store } = configureStore();

const { addTodo } = require('./actions/todos')

store.dispatch(addTodo('the whether is fine!'));