import * as React from 'react';
import C31 from './C31';
import C32 from './C32';

export default class C21 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      a: 1,
      b: 2,
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }

  render() {
    console.log('C21 render');
    return (
      <div>
        <C31 />
        <C32 />
        <button onClick={() => this.setState({ b: 1 })}>改变 C21 的状态</button>
      </div>
    );
  }
}
