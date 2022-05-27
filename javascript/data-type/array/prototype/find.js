let arr = [1, 2, 4, 5, 6];

// indexOf
let index = arr.indexOf(4);
console.log(index); // index
console.log(arr[index]); // element

// find 
let arrObj = [
  { name: 'nilinli'},
  { name: 'nixixi' }
];

Array.prototype.myFindIndex = function (callback) {
  let index;
  //  返回 index
  for(let i = 0; i < this.length; i ++) {
    if (callback(this[i], i)) {
      index = i;
      break;
    }
  }
  return index;
};

Array.prototype.myFind = function(callback) {
  let element;
  //  返回 index
  for(let i = 0; i < this.length; i ++) {
    if (callback(this[i], i)) {
      element = this[i];
      break;
    }
  }
  return element;
};

console.log(arrObj.findIndex((ele) => ele.name === 'nixixi'));
console.log(arrObj.myFindIndex((ele) => ele.name === 'nixixi'));
console.log(arrObj.find((ele) => ele.name === 'nixixi'));
console.log(arrObj.myFind((ele) => ele.name === 'nixixi'));

