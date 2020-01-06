import { file, parse } from './global.js';

function component() {
  var element = document.createElement('div');
 // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  // 处在 window 上下文
  // 但是打包是 Node 环境, this 指向 module.exports
  // this.alert('Hmmm, this probably isn\'t a great idea...');

  console.log(file);
  parse();

  return element;
}

document.body.appendChild(component());