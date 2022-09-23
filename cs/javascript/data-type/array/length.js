let arr = [1, 2, 3, 4, 5];

arr.length = 3;
console.log(arr);

arr.length = 0;
console.log(arr);

arr.length = 5;
console.log(arr);

// in es5 length -> read-only 
let arr2 = [1, 2, 3];
Object.defineProperty(arr2, 'length', {
    writable: false
});

arr2.length = 1;
console.log(arr2.length);
console.log(arr2);