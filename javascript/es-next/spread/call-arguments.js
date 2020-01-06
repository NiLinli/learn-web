function foo(x, y, z) {
  console.log(x + y + z);
}

const args = [0, 1, 2];

// apply
foo.apply(foo, args);

// spread
foo(...args);


