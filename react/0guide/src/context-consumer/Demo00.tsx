import * as React from 'react';

export class Demo00 extends React.Component {
  render() {
    return <Toolbar theme="dark" />;
  }
}

function Toolbar(props) {
  // Toolbar 组件接受一个额外的“theme”属性，然后传递给 ThemedButton 组件。
  // 如果应用中每一个单独的按钮都需要知道 theme 的值，这会是件很麻烦的事，
  // 因为必须将这个值层层传递所有组件。
  return (
    <ThemedButton theme={props.theme} />
  );
}

class ThemedButton extends React.Component<any, any>{
  render() {
    return <Button theme={this.props.theme} />;
  }
}

const Button = (props) => <button> demo00 - { props.theme }</button>