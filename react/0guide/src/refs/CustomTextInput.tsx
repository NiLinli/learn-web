import * as React from 'react';

export class CustomTextInput extends React.Component {

  textInput: React.RefObject<any>;

  constructor(props: any) {
    super(props);
    // 创建 ref 存储 textInput DOM 元素
    this.textInput = React.createRef();
    this.focusTextInput = this.focusTextInput.bind(this);
  }

  focusTextInput() {
    this.textInput.current.focus();
  }

  render() {
    return (
      <div>
        <input
          type="text"
          ref={this.textInput} />
        <button onClick={this.focusTextInput}>Focus the text input</button>
      </div>
    );
  }
}