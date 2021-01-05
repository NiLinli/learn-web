import { observer, inject } from 'mobx-react';
import React from 'react';

@inject('timerStore')
@observer
export default class Timer extends React.Component {

  constructor(props) {
    super(props);

    console.log(JSON.stringify(this.props.timerStore))
  }

  render() {
    return (
      <div>
        <button onClick={this.onReset}>Seconds passed: {this.props.timerStore.timer}</button>
        <button onClick={this.onTick}>tick +1</button>
      </div>
    );
  }

  onTick = () => {
    this.props.timerStore.tick();
  };

  onReset = () => {
    this.props.timerStore.resetTimer();
  };
}
