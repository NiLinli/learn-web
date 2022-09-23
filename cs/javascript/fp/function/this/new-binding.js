function foo(a) {
  this.a = a;
}

// set that new object as the this for the call
var bar = new foo(2);

console.log(bar.a);