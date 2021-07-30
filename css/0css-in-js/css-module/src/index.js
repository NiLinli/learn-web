import $style from './index.css';
import $style2 from './index.scss';

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

