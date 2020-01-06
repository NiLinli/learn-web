global.name = 'nixixi';
const greet = () => `Hi, ${global.name}`;   // 依赖外部状态

console.log(greet());

let someone;
const greetOMG = (name) => {
  someone = name;       // 修改外部状态
}

greetOMG('nixixi');