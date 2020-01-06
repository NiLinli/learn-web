const obj = {
  name: 'nixixi',
  age: 18
};

const strObj = JSON.stringify(obj);
console.log('strObj = %s', strObj);


const strObj2 = JSON.stringify({
  name: 'nixixi2',
  age: 20
});

console.log('strObj2 = %s', strObj2);

// JSON 表示 key 必须是 "" , js 中 key 除了声明 Symbol 都是 string 类型, 直接进行了转化