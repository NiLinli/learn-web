function createArrayMethodPath(methodName, doSomething) {
  if (!(methodName in Array.prototype)) return;

  const originMethod = Array.prototype[methodName];

  Array.prototype[methodName] = function () {
    const args = Array.prototype.slice.call(arguments);

    try {
      doSomething.call(this);
    } catch (error) {}

    return originMethod.apply(this, args);
  };
}

createArrayMethodPath('concat', function () {
  console.log(this.toString(), '在执行 concat');
});

const arr = [1, 2, 3, 4];

const newArr = Array.prototype.concat.apply(arr, [5, 6, 7, 8]);

console.log(newArr)


