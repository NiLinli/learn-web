import * as React from 'react';
import { Clock } from './Clock';

export class ClockWrapper extends React.Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      obj: {
        message: 'test'
      },
      others: 123
    }
  }

  render() {
    return (
      <div>
        <h1>Hello, Lifecycle!</h1>
        <button onClick={this.changeMessage}>改变 message</button>
        <button onClick={this.changeOthers}>改变 others</button>
        <Clock message={this.state.obj.message}  others={this.state.others}/>
      </div>
    );
  }

  private changeMessage = () => {
    this.setState({
      obj: {
        message: 'omg changed'
      }
    })
  }

  private changeOthers = () => {
    this.setState({
      others: '123 changed'
    })
  }
}