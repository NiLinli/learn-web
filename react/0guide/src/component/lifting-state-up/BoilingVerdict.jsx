import React from 'react';

export class BoilingVerdict extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.celsius >= 100) {
      return <p>水会烧开</p>;
    }
    return <p>水不会烧开</p>;
  }
}
