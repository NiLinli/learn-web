import React, { useState, useEffect, useCallback } from 'react';

// 函数组件
function CountAdd() {
  // hooks 从上到下调用

  // 首次渲染
  // 使用 0 初始化变量名为 count 的 state
  // n(n>1) 次渲染
  // 读取变量名为 count 的 state
  const [count, setCount] = useState(0);
  const [fruit, setFruit] = useState('banner');
  const [todos, setTodos] = useState([{ text: 'Learn Hooks' }]);

  


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
