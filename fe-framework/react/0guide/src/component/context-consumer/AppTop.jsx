import React from 'react';

// 痛点: 全局数据, 需要层层传递 props

export default class AppTop extends React.Component {
  render() {
    return <Toolbar theme="dark" />;
  }
}

function Toolbar(props) {
  return <ThemedButton theme={props.theme} />;
}

function ThemedButton(props) {
  return <Button theme={props.theme} />;
}

function Button(props) {
  return <div>层层传递: {props.theme}</div>;
}
