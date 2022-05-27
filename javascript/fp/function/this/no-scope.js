// No such bridge(lexical scope) is possible. 

function foo() {
  var a = 2;
  this.bar();
}

global.bar = function() {
  console.log(this.a);
}

foo();