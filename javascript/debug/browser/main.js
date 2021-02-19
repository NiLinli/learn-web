const foo = 123;

function sayHello() {
  const bar = 456;
  return 789;
}

function log(info) {
  console.log(info);
}

document.getElementById('btn').addEventListener('click', function () {
  log(sayHello());
});
