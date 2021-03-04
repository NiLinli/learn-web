// React 即使没有被引用, 也需要 import
// 因为 jsx 编译后会用到 React.createElement, 隐式引用了
import React from 'react';
import ReactDOM from 'react-dom';

// 元素是构成 React 应用的最小单位
// 是构成 Component 的一部分
// React 元素是普通对象

// 可以将元素赋值给变量
// 组件中存在着元素
const element = <h1>Hello, world</h1>;

const HelloWorld = () => element;

function App() {
  return (
    <div>
      <h3>element</h3>
      <HelloWorld />
    </div>
  )
}

// 通过 react-dom (浏览器平台) 确保 DOM 和 React 元素一致
ReactDOM.render(<App />, document.getElementById('root'));