import * as React from 'react';
import './Welcome.css';

// 组件定义
// pure 函数:
// args: props (pure -> 所以不能改变)
// returnValue: React Element
// export const Welcome = (props: any) => 
//     (<h1>Welcome {props.name} {props.message}</h1>);

// class
export class Welcome extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<h1 onClick={this.onLog}>Welcome {this.props.name} {this.props.message}</h1>);
  }

  onLog = () => this.props.onLog(123);
}

// All React components must act like pure functions with respect to their props.
// props is read only