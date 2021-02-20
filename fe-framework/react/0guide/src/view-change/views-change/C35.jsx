import React from 'react';

export default class C35 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      a: 1,
      b: 2,
    };
  }

  render() {
    console.log('C35 render');
    return (
      <div>
        <div>C35</div>
        <button onClick={() => this.setState({ a: 3 })}>改变 C35 state</button>
      </div>
    );
  }
}
