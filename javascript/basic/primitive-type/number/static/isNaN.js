function isNaN (o) {
  return o !== o;
}

let nanNumber = 2 / 'foo';
console.log(isNaN(nanNumber));