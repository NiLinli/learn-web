const LinkedList = require('./linked-list');

const list = new LinkedList();

const arr = [1, 3, 4, 5, 3, 2, 2, 6, 7];

arr.forEach((v) => list.add(v));

list.print();

list.reverse();

list.print();
