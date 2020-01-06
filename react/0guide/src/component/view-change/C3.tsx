import * as React from 'react';
import { C6 } from './C6';
import { C7 } from './C7';
import { C8 } from './C8';

export class C3 extends React.Component {

  constructor(props){
    super(props);
  }


  render() {
    console.log('C3 render');
    return (<div>
      <C6 />
      <C7 />
      <C8 />
    </div>);
  }
}