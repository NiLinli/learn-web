// es3 纯数字去重
function unique0(arr) {
  let tmpArr = [],
    // tmp = {}; // key-value 记录数组，key为数组item，value 1为已经添加

    tmpMap = new Map();

  for (let i = 0; i < arr.length; i++) {
    let item = arr[i];
    if (!tmpMap.get(item)) {
      tmpMap.set(item, 1);
      tmpArr.push(item);
    }
  }
  return tmpArr;
}

function unique2(arr) {
  return arr.filter((v, i, arr) => i === arr.indexOf(v));
}

// es6 最快
function unique3(arr) {
  const seen = new Map();
  return arr.filter((a) => !seen.has(a) && seen.set(a, 1));
}

// es6 2
function unique4(arr) {
  return Array.from(new Set(arr));
}

let arr = [2, 3, 4, 5, 6, 6, 3, 66, 6, 6, '6'];

console.log(unique0(arr));
console.log(unique1(arr));
console.log(unique2(arr));
console.log(unique3(arr));
console.log(unique4(arr));
