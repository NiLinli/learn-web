import React, { useState, useCallback, useMemo } from 'react';

export default function Person() {
  const [p, setP] = useState({
    name: 'nixixi',
    hungury: false,
    getFoodsNum: 0,
    eatFoodNum: 0,
  });

  // 依赖没有变情况下
  // return prevState[0]; --> 上次的 callback
  // 返回值 onEat/上次 callback 每次都会执行
  // 只是 callback 对应的 state 是之前的
  // 所以视图没有更新
  const onEat = useCallback(() => {
    console.log('onEat');
    setP({
      ...p,
      eatFoodNum: p.eatFoodNum + 1,
    });
  }, [p.getFoodsNum]);

  // 类似于 computed
  // 依赖没有变情况下
  // return prevState[0]; -> memo callback 上次执行的返回值, memo callback 不会再次执行
  // 如果返回值为 fn
  // useMemo(() => fn, deps) 相当于 useCallback(fn, deps)
  // fn 会每次都执行
  const hunguryText = useMemo(() => {
    console.log('hungury text computed');
    return p.hungury ? '饥饿中...' : '吃撑了...';
  }, [p.hungury]);

  console.log('render');

  return (
    <div>
      <div>name: {p.name}</div>
      <div>hungury: {hunguryText}</div>
      <button onClick={() => setP({ ...p, hungury: !p.hungury })}>Toggle hungury status</button>
      <div>eat food num: {p.getFoodsNum}</div>
      <div>get food num: {p.eatFoodNum}</div>

      <button onClick={() => setP({ ...p, getFoodsNum: p.getFoodsNum + 1 })}>Get Food num</button>
      <button onClick={onEat}>Eat food</button>
    </div>
  );
}
