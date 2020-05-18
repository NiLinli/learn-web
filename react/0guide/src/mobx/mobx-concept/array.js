const { observable, autorun, action } = require('mobx');

// observable.array 常见的方法都有, 并且修改一些原生方法 revert
const todos = observable([
  { title: 'Spoil tea', completed: true },
  { title: 'Make coffee', completed: false }
]);

autorun(() => {
  console.log('Remaining:', todos
    .filter(todo => !todo.completed)
    .map(todo => todo.title)
    .join(", ")
  );
});

todos[0].completed = false;

todos[2] = { title: 'Take a nap', completed: false };

todos.shift();