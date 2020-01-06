import * as React from 'react';

interface IState {
  value: number;
}

// 合理的使用内部 state
export class Counter extends React.Component<{}, IState> {

  constructor(props: any) {
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

