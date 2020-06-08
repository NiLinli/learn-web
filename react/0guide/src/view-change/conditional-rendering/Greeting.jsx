import React from 'react';
import { GuestGreeting } from './GuestGreeting';
import { UserGreeting } from './UserGreeting';
import { WarningBanner } from './WarningBanner';

export default class Greeting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      showWarning: true,
    };
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    // 变量存储元素
    // if
    // &&
    // ?:
    const compoent = isLoggedIn ? <UserGreeting onClick={this.handleLogoutClick} /> : <GuestGreeting onClick={this.handleLoginClick} />;

    return (
      <div>
        {compoent}
        {/* 阻止条件渲染 */}
        <WarningBanner warn={this.state.showWarning} />
        <button onClick={this.handleToggleClick}>{this.state.showWarning ? 'Hide' : 'Show'}</button>
      </div>
    );
  }

  handleLoginClick = () => {
    this.setState({ isLoggedIn: true });
  };

  handleLogoutClick = () => {
    this.setState({ isLoggedIn: false });
  };

  handleToggleClick = () => {
    this.setState((prevState) => ({
      showWarning: !prevState.showWarning,
    }));
  };
}
