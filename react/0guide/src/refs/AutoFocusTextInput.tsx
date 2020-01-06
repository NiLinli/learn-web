import * as React from 'react';
import { CustomTextInput } from './CustomTextInput';

export class AutoFocusTextInput extends React.Component {

  textInput: React.RefObject<any>;

  constructor(props: any) {
    super(props);
    this.textInput = React.createRef(); // 访问的 React 组件
  }

  componentDidMount() {
    this.textInput.current.focusTextInput();
  }

  render() {
    return (
      <CustomTextInput ref={this.textInput} />
    );
  }
}