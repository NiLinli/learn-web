import React, { Component, PureComponent } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  // PureComponent
  shouldComponentUpdate(nextProps, nextStates) {
    function shadowEqual(source, target) {
      if (Object.keys(source).length !== Object.keys(target).length) return false;

      let same = true;
      for (const key in source) {
        if (Object.hasOwnProperty.call(source, key)) {
          if (source[key] !== target[key]) {
            same = false;
            break;
          }
        }
      }

      return same;
    }

    if (shadowEqual(this.props, nextProps) && shadowEqual(this.state, nextStates)) {
      return false;
    }

    return true;
  }

  render() {
    console.log('Counter render');

    const { person } = this.props;
    return (
      <div>
        <div>{person.name}</div>
        <div>{this.state.count}</div>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>add counter</button>
        <button onClick={() => this.setState({ count: this.state.count })}>counter nothing</button>
      </div>
    );
  }
}

export default class PureDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: { name: 'nixixi', age: 18 },
    };
  }

  changePersonAge = () => {
    const person = this.state.person;
    person.age = 17;
    this.setState({ person });
  };

  render() {
    return (
      <>
        <Counter person={this.state.person} />
        <button onClick={this.changePersonAge}>修改 props</button>
      </>
    );
  }
}
