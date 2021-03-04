import React, { Component } from 'react';

export default class UpdateState extends Component {
  constructor(props) {
    super(props);

    this.state = {
      a: 1,
      b: 2,
      c: 0,
      d: 0,
      obj: {
        name: '倪西西',
        age: 18,
      },
    };
  }

  shouldComponentUpdate(nextProps, nextStates) {
    console.log('shouldComponentUpdate');
    return true;
  }

  componentDidUpdate(prevProps, prevStates) {
    console.log('Before update: ');
    console.log('props = ', prevProps, 'state = ', prevStates);
    console.log('After update: ');
    console.log('props = ', this.props, 'state = ', this.state);
  }

  onMergeClick = () => {
    this.setState({ a: 123 }); // 请求更新: 将 state 更新 push 到队列中
    console.log(this.state.a); // 1
    this.setState({ b: 456 }); // 请求更新: 将 state 更新 push 到队列中

    // 延迟一个 tick 去批量更新队列中的状态
  };

  // 不会合并的情况
  onNoMergeClick = () => {
    setTimeout(() => {
      this.setState({ a: 133000 }); // 一次 update
      console.log(this.state.a); // 133000
      this.setState({ b: 456000 }); // 另外一次 update
    }, 0);
  };

  onSetSameStateClick = () => {
    const { obj } = this.state;

    // 即使 obj 引用类型不变, 只要调用 setState, 就会 update
    this.setState({ obj: obj });
  };

  // 同一个周期内多次处理同一个 state, 需要用到 updater
  onMultiSetStateClick = () => {
    this.setState({ c: this.state.c + 1 });
    this.setState({ c: this.state.c + 2 });
    this.setState({ c: this.state.c + 3 }); // 只更新了这一条

    // state 操作等同(合并更新)
    // {
    //   ...prevState,
    //   c: this.state.c + 1,
    //   c: this.state.c + 2,
    //   c: this.state.c + 3,
    // }

    // 传递函数可以解决这个问题 依赖前置状态的问题
    this.setState((prevState) => ({ d: prevState.d + 1 }));
    this.setState((prevState) => ({ d: prevState.d + 2 }));
    this.setState((prevState) => ({ d: prevState.d + 3 }));
  };

  render() {
    const { a, b, c, d, obj } = this.state;
    return (
      <div>
        <p>
          a = {a} b = {b}
        </p>
        <button onClick={this.onMergeClick}>合并更新</button>
        <button onClick={this.onNoMergeClick}>不合并更新</button>

        <p>
          c = {c} d = {d}
        </p>
        <button onClick={this.onMultiSetStateClick}>多次处理同一状态</button>

        <p>{JSON.stringify(obj)}</p>
        <button onClick={this.onSetSameStateClick}>state 引用类型不变</button>
      </div>
    );
  }
}
