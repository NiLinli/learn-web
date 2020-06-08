import React from 'react';

export default class Clock extends React.Component {
  timerID;

  // constructor
  // 可以访问 props
  // 初始化 state
  constructor(props) {
    super(props);
    console.log('Clock constructor');
    this.state = {
      date: new Date(),
      message: '',
      a: 1,
      b: 2,
      c: 3,
      d: 3,
    };
  }

  // 组件的 mount 挂载前
  // componentWillMount() {
  //   // 1. 只执行一次, 初次 render 之前
  //   // 2. setState 与 construct 中直接赋值效果一样
  //   // 3. 除了 root component 以外, 用不到这个
  //   // 4. root 组件可以用于链接 第三方 API(应用程序配置)
  //   console.log('Clock componentWillMount');
  //   console.log(this.props);
  // }

  render() {
    return (
      <div>
        <h2>1. 更新 Props</h2>
        <p>message: {this.props.message}</p>
        <p>others: {this.props.others}</p>

        <h2>2. 更新 State</h2>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        <p>
          a {this.state.a} b :{this.state.b}
        </p>
        <button onClick={this.mergeClick}>合并更新</button>
        <p>c: {this.state.c}</p>
        <p>d: {this.state.d}</p>
        <button onClick={this.asyncClick}>异步更新</button>
      </div>
    );
  }

  // 组件的 mount 挂载完成 -- 初次 render 完成
  componentDidMount() {
    // 1. 只执行一次, 初次 render 完成之后
    //      ajax 调用, async 加载组件设置
    // 2. setState 会再次 render 组件(尽量不要做这个事情)
    //   - 常见的再次 render 情况: state 需要等到 DOM 元素渲染完成后, 进行计算进行赋值

    console.log('Clock componentDidMount');
    // this.timerID = window.setInterval(
    //     () => this.tick(),
    //     1000
    // );
  }

  // componentWillReceiveProps(nextProps) {
  //   // 初次渲染不调用, 只在更新状态阶段调用
  //   // nextProps   更新之后的 props
  //   // this.props  更新之前的 props
  //   //
  //   console.log(`componentWillReceiveProps nextProps`, nextProps);

  //   if (nextProps.message !== this.props.message) {
  //     this.setState({
  //       message: nextProps.message,
  //     });
  //   }
  // }

  shouldComponentUpdate(nextProps, nextState) {
    // 控制组件是否更新 默认返回 true
    // 不能调用 setState
    console.log('shouldComponentUpdate');
    return true;
  }

  getSnapshotBeforeUpdate() {}

  // componentWillUpdate(nextProps, nextState) {
  //   console.log('componentWillUpdate');
  //   console.log('Before update: ');
  //   console.log('props = ', this.props);
  //   console.log('state = ', this.state);
  //   console.log('After update: ');
  //   console.log('props = ', nextProps);
  //   console.log('state = ', nextState);
  // }

  // 中间有个 render
  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate');
    console.log('Before update: ');
    console.log('props = ', prevProps);
    console.log('state = ', prevState);
    console.log('After update: ');
    console.log('props = ', this.props);
    console.log('state = ', this.state);
  }

  // 组件的 unmount 卸载
  componentWillUnmount() {
    // 1. 事件的回收
    // 2. 清理定时器
    // 3. ... 其他清理方法
    console.log('Clock componentWillUnmount');
    clearInterval(this.timerID);
  }

  // private tick() {
  //     // 更新状态
  //     // 1. 不要直接更新 state
  //     this.setState({
  //         date: new Date()
  //     });
  // }

  // 2. 会合并更新(调用多个合并成一个进行更新)
  mergeClick = () => {
    this.setState({ a: 123 });
    this.setState({ b: 456 });
  };

  // 3. 状态更新可能是异步的, 无法直接依赖之前的值去做计算(实时读取值)
  asyncClick = () => {
    // 合并更新
    this.setState({ c: this.state.c + 1 });
    this.setState({ c: this.state.c + 2 });
    this.setState({ c: this.state.c + 3 }); // 只更新了这一条

    // 传递函数可以解决这个问题 依赖前置状态的问题
    this.setState((prevState) => ({ d: prevState.d + 1 }));
    this.setState((prevState) => ({ d: prevState.d + 2 }));
    this.setState((prevState) => ({ d: prevState.d + 3 }));
  };
}

// class 相比 fuction
// 1. 定义生命周期钩子
// 2. 定义局部状态 state
// 3. 定义一些与组件相关的私有方法

// 生命周期
// 1. 挂载
//    - constructor
//    - render
//    - componentDidMount
// 2. 更新状态
//    - shouldComponentUpdate
//    - componentDidUpdate
// 3. 卸载
//    - componentWillUnmount

// 数据更新(调用 render 函数返回 React Element)
// 数据流向自顶向下: 只能上面组件影响下面组件, 反之不行
// 1. props 改变  componentWillReceiveProps -->
// 2. setState 方法                               shouldComponentUpdate --> [true] --> componentWillUpdate --> render --> componentDidUpdate

// shouldComponentUpdate() 性能优化点

// 钩子函数中, 有参数传递的是通过 this 获取不到的状态
