// first in last out

// 1 push pop
let stackArr = [];

let newLength = stackArr.push(1, 3, 4, 5);
let stackTop = stackArr.pop();

console.log(newLength); // 4
console.log(stackTop); // 5


// 2 unshift shift
let arr = [];
arr.unshift(1);
console.log(arr);
arr.unshift(2, 2, 3, 4, 5, 6);
console.log(arr);
arr.shift();
console.log(arr);

// shift	英[ʃɪft] 美[ʃɪft]
// vt.	改变; 换挡; 去掉; 摆脱掉;



// shift 和 pop 为移除, 返回移除的项目
// unshift 和 push 为添加, 返回数组长度
