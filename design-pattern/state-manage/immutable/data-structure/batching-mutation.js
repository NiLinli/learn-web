const { List } = require('immutable');

const list1 = List([1, 2, 3, 4]);

const list2 = list1.withMutations((list) => list.push(5).push(6).push(7));


console.log(list2.toJS())
