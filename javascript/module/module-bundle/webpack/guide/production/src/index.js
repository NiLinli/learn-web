import { cube } from './math.js';

// 进行代码层面的优化
// 打包后只保留符合条件的代码
if (process.env.NODE_ENV === 'prod') {
  console.log('production');
} else {
  console.log('development');
}

// 编译1 DefinePlugin 替换
// if ('prod' === 'prod') {
//   console.log('production');
// } else {
//   console.log('development');
// }

// 编译2 移除无用代码
// console.log('production');



function component() {
  var element = document.createElement('pre');
  element.innerHTML = ['Hello webpack!', '5 cubed is equal to ' + cube(6)].join('\n\n');
  return element;
}

document.body.appendChild(component());

console.log(process);
console.log(process.env.NODE_ENV);
