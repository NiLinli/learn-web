import React, { useState, useEffect, useCallback } from 'react';

// 函数组件
function CountAdd() {
  // 声明 count 的 state 变量
  // useState use 在初始化和更新组件的时候, 都会返回当前的最新状态
  const [count, setCount] = useState(0); // 3. 参数是状态的初始值
  // 1. 当前状态
  // 2. 更新状态的函数

  // 多个 state
  const [fruit, setFruit] = useState('banner');
  const [todos, setTodos] = useState([{ text: 'Learn Hooks' }]);

  // 相当于 componentDidMount 和 componentDidUpdate
  // 告诉 React 在完成对 DOM 的更改后运行你的“副作用”函数
  // 在函数内部使用 effect 可以直接访问 state 变量
  useEffect(() => {
    document.title = `You clicked ${count} times`;
    return () => {
      console.log('组件销毁时候清除副作用');
    };
  });

  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  // 在返回 view 之前 使用 hooks
  return (
    <div>
      {/* 读取变量即可 */}
      <p>You clicked {count} times</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

export default CountAdd;
