import * as React from 'react';

// 合理的使用内部 state
export default class Counter extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      value: 0
    }
  }

  increment = () => {
    this.setState(prevState => ({
      value: prevState.value + 1
    }));
  };

  decrement = () => {
    this.setState(prevState => ({
      value: prevState.value - 1
    }));
  };

  render() {
    return (
      <div>
        <div>{this.state.value}</div>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
      </div>
    );
  }
}

