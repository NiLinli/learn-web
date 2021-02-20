import React from 'react';
import './Welcome.css';

// 组件定义
// pure 函数:
// args: props (pure -> 所以不能改变)
// returnValue: React Element
// 没有副作用

// class
export default class Welcome extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { name, message } = this.props;
    return (
      <h5 onClick={this.onLog}>
        Welcome {name} {message}
      </h5>
    );
  }

  onLog = () => this.props.onLog(123);
}

// All React components must act like pure functions with respect to their props.
// props is read only
