import React from 'react';
import ReactDOM from 'react-dom';

// reducer - “how things change”
const counter = (state = { value: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { value: state.value + 1 };
    case 'DECREMENT':
      return { value: state.value - 1 };
    default:
      return state;
  }
}

export default class CounterWithRedux extends React.Component {

  constructor(props) {
    super(props);
    this.state = counter(undefined, {});  // pure object
  }

  // dispatch
  dispatch(action) {
    this.setState(prevState => counter(prevState, action));
  }

  increment = () => {
    this.dispatch({ type: 'INCREMENT' }); // action - “what happened” 
  };

  decrement = () => {
    this.dispatch({ type: 'DECREMENT' });
  };

  render() {
    return (
      <div>
        <div>{this.state.value}</div>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
      </div>
    )
  }
}