import React from 'react';
import C33 from './C33';
import C34 from './C34';
import C35 from './C35';

export default class C22 extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('C22 render');
    return (
      <div>
        <C33 />
        <C34 />
        <C35 />
      </div>
    );
  }
}
