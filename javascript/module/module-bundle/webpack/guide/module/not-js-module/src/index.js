import './style.css';       // 内联 style 标签插入到 html 中
import Icon from './images/icon.jpg';  // 导入图片

// 数据类型文件
import ENV from './config/env';     // 类似于 Node , JSON 内置支持
import DATA from './config/data.xml';      // xml-loader 转为 JS Object

function component() {
    var element = document.createElement('div');

    element.classList.add('hello');
    element.classList.add('icon-back');
    element.classList.add('iconfont');

    var myIcon = new Image();
    myIcon.src = Icon;      // Icon 变量将包含该图像在处理后的最终 url

    element.appendChild(myIcon);

    return element;
}


document.body.appendChild(component());

console.log(ENV);
console.log(DATA);

