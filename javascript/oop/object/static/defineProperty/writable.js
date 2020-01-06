let person = {
  age: 18
};

Object.defineProperty(person, 'name', {
  configurable: true, 
  writable: false,    //  
  enumerable: true,
  value: 'nixixi'
});

person.name = 'nixixi1111'; // not writable 不会报错, 但是也不会改变 (严格模式会报错)
console.log(person.name);