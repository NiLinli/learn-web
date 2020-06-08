import React from 'react';

export default class NumberList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const numbers = this.props.numbers;
    const listItems = numbers.map((num, k) => <li key={num.toString()}>{num}</li>);
    return <ul>{listItems}</ul>;
  }
}

// key 为独一无二(siblings)的 string
//  id
//  index
