import React from 'react';
import C21 from './C21';
import C22 from './C22';

export default class C1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      a: 1,
      b: 2,
    };
  }

  render() {
    console.log('C1 render');
    return (
      <div>
        <button onClick={() => this.setState({ a: 3 })}>改变 C1 的 State</button>
        <button onClick={() => this.forceUpdate()}>forceUpdate</button>
        <p>{Date.now()}</p>
        <div>
          <C21 />
        </div>
        <p>-----------------</p>
        <div>
          <C22 />
        </div>
      </div>
    );
  }
}
