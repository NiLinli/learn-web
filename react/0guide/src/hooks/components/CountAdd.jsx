import React, { useState, useEffect } from 'react';

function CountAdd() {
  // 声明 count 的 state 变量
  const [count, setCount] = useState(0); // 3. 参数是状态的初始值
  // 1. 当前状态
  // 2. 更新状态的函数

  // 多个 state
  const [fruit, setFruit] = useState('banner');
  const [todos, setTodos] = useState([{ text: 'Learn Hooks' }]);

  // 相当于 componentDidMount 和 componentDidUpdate
  // 告诉 React 在完成对 DOM 的更改后运行你的“副作用”函数
  useEffect(() => {
    document.title = `You clicked ${count} times`;
    return () => {
      console.log('组件销毁时候清除副作用');
    }
  })

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default CountAdd;
