let person = {
  age: 18
};

Object.defineProperty(person, 'name', {
  configurable: true, 
  writable: true,   
  enumerable: false,
  value: 'nixixi'
});

// not enumerable
for (const key in person) {
  if (person.hasOwnProperty(key)) {
      console.log(person[key]);
  }
}

console.log(`name is enumerable property? ${person.propertyIsEnumerable('name')}`)
