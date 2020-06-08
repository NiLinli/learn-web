import React from 'react';

export default class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: true,
    };

    this.handleClick1 = this.handleClick1.bind(this);
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick1}>{this.state.isToggleOn ? 'ON' : 'OFF'}</button>
        <button onClick={() => this.handleClick2()}>{this.state.isToggleOn ? 'ON' : 'OFF'}</button>
        <button onClick={this.handleClick}>{this.state.isToggleOn ? 'ON' : 'OFF'}</button>
      </div>
    );
  }

  // 属性初始化器语法
  handleClick = () => {
    this.setState((prevState) => ({
      isToggleOn: !prevState.isToggleOn,
    }));
  };

  handleClick1() {
    this.setState((prevState) => ({
      isToggleOn: !prevState.isToggleOn,
    }));
  }

  handleClick2() {
    console.log(this)
    this.setState((prevState) => ({
      isToggleOn: !prevState.isToggleOn,
    }));
  }
}
