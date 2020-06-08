import React from 'react';
import NumberList from './NumberList';

export default class ListWrapper extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const arr = [1, 2, 3, 4, 5, 6, 7];
    return <NumberList numbers={arr} />;
  }
}
