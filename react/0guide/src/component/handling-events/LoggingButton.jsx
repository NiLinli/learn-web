import React from 'react';

export default class LoggingButton extends React.Component {
  constructor(props) {
    super(props);
  }

  // e 隐式绑定了, 不需要绑定
  // e 必须在参数最后一个
  handleClick(name, e) {
    console.log('this is:', this);
    console.log('name:', name);
    console.log(e); // 封装的 Event 对象
  }

  render() {
    // handleClick 执行时候并不是直接在该 class 的 instance 里面, 而是在一个 callback 里面
    return <button onClick={this.handleClick.bind(this, 'nixixi')}>Click me</button>;
  }
}
