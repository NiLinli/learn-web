function createFunction() {
  return function () {
    console.log('function has been created');
  };
}

const foo = createFunction();
foo();

const bar = function () {
  console.log('anonymous function assigning to bar variable');
};
