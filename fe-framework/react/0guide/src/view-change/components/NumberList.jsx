import React from 'react';

export default function NumberList(props) {
  const { numbers } = props;
  // key(string 类型) 相对于 siblings 是唯一的
  // 通过 key 来匹配元素, 然后做 crud
  // 使用 index 做 key 的话, 只适合 append 元素, 其他操作会使已有元素的 index 发生变化
  // 1. 可取 id
  // 2. 可取 uuid
  // 3. 退而求其次取 index
  const listItems = numbers.map((num, k) => <li key={num.toString()}>{num}</li>);
  return <ul>{listItems}</ul>;
}
