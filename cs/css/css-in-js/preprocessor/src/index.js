import './index.scss';
import './index.less';

console.log('preprocessor');

var h1 = document.createElement('h1');
var h2 = document.createElement('h2');

h1.innerText = 'h1';
h2.innerText = 'h2';

document.body.appendChild(h1);
document.body.appendChild(h2);
