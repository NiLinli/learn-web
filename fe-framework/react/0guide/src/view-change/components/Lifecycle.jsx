import React, { Component } from 'react';

// render 先序遍历
// mount  后序遍历
export default class A extends Component {
  constructor(props) {
    super(props);

    this.state = {
      a: 0,
    };
  }

  componentDidMount() {
    console.log('A mount');
  }

  render() {
    console.log('A render');

    return (
      <React.Fragment>
        <button
          onClick={() => {
            this.setState({ a: 2 });
          }}
        >
          A 更新
        </button>
        <B />
        <C />
      </React.Fragment>
    );
  }
}

class B extends Component {
  constructor(props) {
    super(props);

    this.state = {
      b: 0,
    };
  }

  componentDidMount() {
    console.log('B mount');
  }

  render() {
    console.log('B render');

    return (
      <React.Fragment>
        <B1 />
        <B2 />
      </React.Fragment>
    );
  }
}

class C extends Component {
  constructor(props) {
    super(props);

    this.state = {
      a: 0,
    };
  }

  componentDidMount() {
    console.log('C mount');
  }

  shouldComponentUpdate(nextProps, nextStates) {
    // C 拒绝更新 拒绝 props 与 states
    // C 以及 C 的子树都不会更新
    return false;
  }

  render() {
    console.log('C render');

    return (
      <React.Fragment>
        <button
          onClick={() => {
            this.setState({ a: 3 });
          }}
        >
          C 更新
        </button>
        {/* 强制更新只会使得当前组件跳过 shouldComponentUpdate, 子组件正常生命周期不受影响 */}
        <button onClick={() => this.forceUpdate()}>C 强制更新</button>
        <C1 />
        <C2 />
      </React.Fragment>
    );
  }
}

class B1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      b1: 0,
    };
  }

  componentDidMount() {
    console.log('B1 mount');
  }

  render() {
    console.log('B1 render');

    return null;
  }
}

class B2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      b2: 0,
    };
  }

  componentDidMount() {
    console.log('B2 mount');
  }

  render() {
    console.log('B2 render');

    return null;
  }
}

class C1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      c1: 0,
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

  componentDidMount() {
    console.log('C1 mount');
  }

  render() {
    console.log('C1 render');
    return null;
  }

  // class 相比 fuction
// 1. 定义生命周期钩子
// 2. 定义局部状态 state
// 3. 定义一些与组件相关的私有方法



}

class C2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      c2: 0,
    };
  }

  componentDidMount() {
    console.log('C2 mount');
  }

  shouldComponentUpdate() {
    // C2 拒绝更新
    return false;
  }

  render() {
    console.log('C2 render');

    return null;
  }
}
