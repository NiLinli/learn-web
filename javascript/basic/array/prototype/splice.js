// splice	英[splaɪs] 美[splaɪs]
// vt.	绞接; 捻接（两段绳子）; 胶接; 粘接（胶片、磁带等）;
// n.	胶接处，粘接处，铰接处;
// -> 切了数组 然后还可以粘贴

let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let returnArr1 = arr1.splice(4);
console.log(returnArr1); // 返回删除的部分
console.log(arr1); // 修改原有数组

let arr2 = [0, 1, 2, 3, 4, 5, 6, 7, 7, 8, 9, 10];
let returnArr2 = arr2.splice(2, 2, 10000, 20000);
console.log(returnArr2);
console.log(arr2);

// 任意位置插入数组
let arr3 = [0, 1, 2, 3];
arr3.splice(2, 0, 90, 80);
console.log(arr3);