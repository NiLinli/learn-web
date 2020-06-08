import React from 'react';
import Welcome from './Welcome';

// 类似于 curry 化函数, 指定一个属性或者多个属性
export default class SpecialWelcome extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <Welcome message={'message is the same'} {...this.props} />;
  }
}
