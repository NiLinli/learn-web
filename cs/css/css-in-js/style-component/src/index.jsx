import React, { Component } from 'react';
import { Button, TomatoButton, Text } from './stylejs/index';
import './style/index.css';

export default function App() {
  const active = true;

  return (
    <div>
      <h2>样式组织方式</h2>
      <h3>Style Component</h3>
      <Button>Button</Button>
      <TomatoButton>TomatoButton</TomatoButton>

      <h3>普通 class</h3>
      <button className="btn">Button</button>
      <button className="btn btn-tomato">TomatoButton</button>

      <h2>js 传入 css 当中</h2>
      <h3>Style Component</h3>
      <Text active={active}>Text</Text>
      <h3>普通 class</h3>
      <div className={active ? 'text text-active' : 'text'}>Text</div>
    </div>
  );
}
