import { observer } from 'mobx-react';
import React from 'react';

export default observer(
  // 绑定操作
  class Timer extends React.Component {
    render() {
      return (
        <div>
          <button onClick={this.onReset}>Seconds passed: {this.props.state.timer}</button>
          <button onClick={this.onTick}>tick +1</button>
        </div>
      );
    }
    
    onTick = () => {
      this.props.state.tick();
    };

    onReset = () => {
      this.props.state.resetTimer();
    };
  }
);
