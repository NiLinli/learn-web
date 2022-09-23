// [] 
// 接收 variable / 接受 value
let str = 'firstname',
    person = {
        firstname: 'linli',
        'last name': 'Ni',
    };

console.log(person[str]);
console.log(person['firstname']);
console.log(person['last name']);   // 字符串字面量比较特殊只能用 [] 表示

// [] 定义字面量
let person1 = {
    [str]: 'linli'
};

console.log(person1['firstname']);

console.log('----------');


// key 为非 symbol 和 string 类型以外的类型 都会调用 toString
let o = {
  toString: function() {
    return 'diy toString';
  }
}

let obj = {
  [null]: '1',
  [undefined]: '2',
  [123]: '3',
  [true]: '4',
  [o]: '5'
};

console.log(Object.keys(obj));