import React, { Component } from 'react';

// 通过高阶函数 memo 之前渲染结果
// 如果 nextProps 和 props shadow equal, 会跳过渲染, 使用上一次记忆的渲染结果
// 支持传递 nextProps 和 props 的比较函数
const Counter = React.memo(
  class Counter extends Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0,
      };
    }

    render() {
      console.log('Counter render');

      const { person } = this.props;
      return (
        <div>
          <div>{person.name}</div>
          <div>{this.state.count}</div>
          <button onClick={() => this.setState({ count: this.state.count + 1 })}>add counter</button>
          <button onClick={() => this.setState({ count: this.state.count })}>counter nothing</button>
        </div>
      );
    }
  }
);

export default class MemoDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: { name: 'nixixi', age: 18 },
    };
  }

  changePersonAge = () => {
    const person = this.state.person;
    person.age = 17;
    this.setState({ person });
  };

  render() {
    return (
      <>
        <Counter person={this.state.person} />
        <button onClick={this.changePersonAge}>修改 props</button>
      </>
    );
  }
}
