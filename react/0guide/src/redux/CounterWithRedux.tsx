import * as React from 'react';


// reducer - “how things change”
const counter = (state = { value: 0 }, action:any) => {
  switch (action.type) {
    case 'INCREMENT':
      return { value: state.value + 1 };
    case 'DECREMENT':
      return { value: state.value - 1 };
    default:
      return state;
  }
}

export class CounterWithRedux extends React.Component<any, any> {

  constructor(props: any) {
    super(props);
    this.state = counter(undefined, {});  // pure object
  }

  // dispatch
  dispatch(action:any) {
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