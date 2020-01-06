import * as React from 'react';

export class MyComponent extends React.Component {

  myRef: React.RefObject<any>;

  constructor(props: any) {
    super(props);
    this.myRef = React.createRef();
  }
  render() {
    return <div ref={this.myRef} />;
  }

  componentDidMount() {
    console.log(this.myRef);
  }
}

// parent-child 通信使用 props
// 典型数据流外强制修改子组件
// 1. HTML DOM
// 2. React Component

// 处理焦点、文本选择或媒体控制
// 触发强制动画
// 集成第三方 DOM 库

// 使用 refs --> 考虑 state 位置 --> lifting state up