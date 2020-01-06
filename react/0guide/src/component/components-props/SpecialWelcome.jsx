import * as React from 'react';
import { Welcome } from './Welcome';

export class SpecialWelcome extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Welcome  message={'message is the same'}  {...this.props}/> 
    )
  }
}