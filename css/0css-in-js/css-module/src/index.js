import $style from './index.css';
import $style2 from './index.scss';
// css loader 开启 css module
// 所有 css 都是按照 css module 编译
import './index.scss';
import './index.css';

import './main.scss';

var h1 = document.createElement('h1');
h1.innerText = 'css module class';
h1.className = $style.title;

var h2 = document.createElement('h2');
h2.innerText = 'css module other :export';
h2.style.color = $style.pColor;

document.body.appendChild(h1);
document.body.appendChild(h2);

document.body.style.backgroundColor = $style2.$fooColor;

document.body.className = $style2.main;
