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
// loader 可以做这些事情
if (module.hot) {
  module.hot.accept('./print.js', function () {

    console.log(module.hot);
    console.log('Accepting the updated printMe module!');

    document.body.removeChild(element);
    element = component();
    document.body.appendChild(element);
  });
}
