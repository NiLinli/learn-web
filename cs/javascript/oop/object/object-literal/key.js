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


