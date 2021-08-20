import _ from 'lodash';
import printMe from './print.js';
import './styles.css';

function component() {
  var element = document.createElement('div');
  var btn = document.createElement('button');

  element.innerHTML = _.join(['halo', 'webpack'], '');

  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;
  element.appendChild(btn);

  return element;
}

let element = component();
document.body.appendChild(element);

// HMR 需要做很多其他的操作才能完成
// loader 实现 hmr 监听
// 收到通知需要更新 -> 下载更新 chunk(js) -> 执行 js 更新 chunk 

// react-hot-loader: react component hmr
// vue-loader: vue component hmr
// style-loader: style hmr
// ...



if (module.hot) {
  module.hot.accept('./print.js', function () {
    console.log(module.hot);
    console.log('Accepting the updated printMe module!');
    document.body.removeChild(element);
    element = component();
    document.body.appendChild(element);
  });
}
