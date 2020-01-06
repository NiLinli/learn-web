import { cube } from './math.js';

// 进行代码层面的优化
// 打包后只保留符合条件的代码
if (process.env.NODE_ENV === 'production-app') {
    console.log('production');
} else {
    console.log('development')
}

function component() {
    var element = document.createElement('pre');
    element.innerHTML = [
        'Hello webpack!',
        '5 cubed is equal to ' + cube(6)
    ].join('\n\n');
    return element;
}

document.body.appendChild(component());