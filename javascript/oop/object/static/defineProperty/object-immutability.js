let myObject1 = {};

// Object Constant
Object.defineProperty(myObject1, 'NAME', {
  value: 'nixixi',
  writable: false,
  configurable: false
});

// Prevent extensions
Object.preventExtensions(myObject1);

myObject1.b = 3;
console.log(myObject1.b); // undefined