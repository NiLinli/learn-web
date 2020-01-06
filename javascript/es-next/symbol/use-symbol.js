let firstName = Symbol('first name');

let person = {
    [firstName]: 'linli'
};

Object.defineProperty(person, firstName, {
    writable: false
});

person[firstName] = 'hehe';

console.log(person[firstName])