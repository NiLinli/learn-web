import * as React from 'react';
import Welcome from './Welcome';
import SpecialWelcome from './SpecialWelcome';

export default function WelcomeWrapper(props) {
  const obj = {
    message: 'this is a message',
    name: 'omg',
  };

  return (
    <div>
      <Welcome name="ni xixi" />
      <Welcome name={'ni xixi'} />
      <Welcome name={'ni' + 'xi' + 'xi'} />
      <Welcome name={'omg'} message={'this is a message'} />

      <SpecialWelcome name={'sp1'} onLog={(value) => console.log(value)} />
      <SpecialWelcome name={'sp2'} onLog={(value) => console.log(value)} />
      <SpecialWelcome name={'sp3'} onLog={(value) => console.log(value)} />

      {/* 传递一个配置对象 */}
      <Welcome {...obj} />
      {/* 被忽略的值 */}
      <div>{false}</div>
      <div>{true}</div>
      <div>{undefined}</div>
      <div>{null}</div>
    </div>
  );
}

// Component 将 UI 切割成不同的组建
// 1. 可复用性
// 2. 模块性开发

// React 自定义组件的渲染
// 1. 返回 render 函数返回值的 React Element(一个)
// 2. 不会产生新的 html 结构影响 css 布局
// 3. 所以 JSX expressions must have one parent element.

// JSX 语法糖
// <Welcome name="ni xixi"/> 等效于
// React.createElement(Welcome, { name: "ni xixi" });
// 1. createElement 中用到了 Welcome , 所以需要 import 声明这个变量
// 2. 大小写
// <welcome name="ni xixi"/> React.createElement("welcome", { name: "ni xixi" });
// Welcome   -- React Component
// "welcome" -- 内置组件(html 标签)
// <div name="ni xixi"/>  React.createElement("div", { name: "ni xixi" });

// { 任意 Javascript 表达式(if for 除外) }
// 字符串常量
// 扩展属性
