class Parent {
  constructor() {
    // 1. new serves as the context for a property access
    // 2. virtual context, not an object 
    if (new.target === Parent) {
      console.log('Parent instantiated');
    } else if (new.target === Child) {
      console.log('A child instantiated');
    }
  }
}


class Child extends Parent {}

var a = new Parent();
var b = new Child();