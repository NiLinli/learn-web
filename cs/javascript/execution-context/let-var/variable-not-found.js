try {
  console.log(a);   // RHS
} catch (error) {
  console.log(error.name);
}

function foo () {
  b = 2;    // LHS
}

foo();

console.log(b);