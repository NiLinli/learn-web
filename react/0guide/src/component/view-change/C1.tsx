import * as React from 'react';
import { C2 } from './C2';
import { C3 } from './C3';

export class C1 extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      a: 1,
      b: 2
    }
  }


  render() {
    console.log('C1 render');
    return (
      <div>

        <button onClick={() => this.setState({a: 3})}>改变 C1 的 State</button>
        <button onClick={() => this.forceUpdate()}>forceUpdate</button>
        
        <p>{ Date.now() }</p>

        <div>
          <C2 />
        </div>
        <p>-----------------</p>
        <div>
          <C3 />
        </div>


      </div>
    );
  }
}