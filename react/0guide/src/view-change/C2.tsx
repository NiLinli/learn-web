import * as React from 'react';
import { C4 } from './C4';
import { C5 } from './C5';

export class C2 extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      a: 1, 
      b: 2
    }
  }

  shouldComponentUpdate() {
    return false;
  }


  render() {
    console.log('C2 render');
    return (
      <div>
        <C4 />
        <C5 />
        <button onClick={()=> this.setState({ b :1 })}>改变 C2 的状态</button>
      </div>
    );
  }
}