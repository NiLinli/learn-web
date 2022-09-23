import { cube } from './math.js';

function component() {
    var element = document.createElement('pre');
    element.innerHTML = [
        'Hello webpack!',
        'Math.random() cubed is equal to ' + cube(Math.random())
    ].join('\n\n');
    return element;
}

document.body.appendChild(component());