// seal
// writable: false

const obj = {
  name: 'nixixi',
};

// 返回的对象于原对象相同
const returnObj = Object.freeze(obj);
console.log(returnObj === obj);

returnObj.name = '123';
returnObj.age = 18;
obj.name = '123';
obj.age = 18;

console.log(returnObj, obj);
