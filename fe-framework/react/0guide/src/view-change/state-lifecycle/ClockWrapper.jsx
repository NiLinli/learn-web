import React from 'react';
import Clock from './Clock';

export default class ClockWrapper extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
      obj: {
        message: 'test',
      },
      others: 123,
    };
  }

  render() {
    const { show, obj, others } = this.state;
    return (
      <div>
        <h5>Hello, Lifecycle!</h5>
        <button onClick={this.toggleClock}>toggle clock show</button>
        <button onClick={this.changeMessage}>改变 message</button>
        <button onClick={this.changeOthers}>改变 others</button>
        {show && <Clock message={obj.message} others={others} />}
      </div>
    );
  }

  toggleClock = () => {
    this.setState((prevState) => {
      return {
        show: !prevState.show,
      };
    });
  };

  changeMessage = () => {
    this.setState({
      obj: {
        message: 'omg changed',
      },
    });
  };

  changeOthers = () => {
    this.setState({
      others: '123 changed',
    });
  };
}
