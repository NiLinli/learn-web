// Object Array
let o = {
    x: 1
};

o.x = 2;
o.y = 3;

console.log(o);

let a = [1, 2, 3];
a[0] = 0;
a[3] = 4;

console.log(a);

// mutable compare
// Objects are not compared by value: two objects are not equal even if they have the same properties and values. 
// objects are compared by reference: two object values are the same if and only if they refer to the same underlying object.
let a1 = [],
    b1 = [],
    o1 = {
        x: 1
    },
    o2 = {
        x: 1
    };
console.log(a1 === b1);
console.log(o1 === o2);