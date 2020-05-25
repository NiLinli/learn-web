import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CountAdd from './components/CountAdd';

// 不编写 class 的情况下
// 使用 state
// 以及相应的特性

// Hook 使你在无需修改组件结构的情况下复用状态逻辑

// 定义：
// 你在函数组件里“钩入” class 组才有的特性: 
// React state 
// 生命周期等特性的函数

function App() {
  return (
    <div>
      <h4>Hooks 简介</h4>
      <CountAdd />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
