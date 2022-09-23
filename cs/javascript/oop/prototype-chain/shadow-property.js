let anotherObject = { a: 2 };

let myObject = Object.create(anotherObject);

console.log(anotherObject.a);
console.log(myObject.a);

console.log(anotherObject.hasOwnProperty('a'));
console.log(myObject.hasOwnProperty('a'));

// create shadow property
myObject.a++;

console.log(anotherObject.a);
console.log(myObject.a);
console.log(myObject.hasOwnProperty('a'));
