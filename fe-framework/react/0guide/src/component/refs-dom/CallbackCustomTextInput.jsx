import React from 'react';

export class CallbackCustomTextInput extends React.Component {
  textInput;
  setTextInputRef;

  constructor(props) {
    super(props);

    // React 将在组件挂载时将 DOM 元素传入ref 回调函数并调用
    // element 参数: DOM or React Component
    this.setTextInputRef = (element) => {
      console.log(element);
      this.textInput = element;
    };
  }

  focusTextInput = () => {
    // 直接使用原生 API 使 text 输入框获得焦点
    if (this.textInput) {
      this.textInput.focus();
    }
  };

  componentDidMount() {
    // 渲染后文本框自动获得焦点
    this.focusTextInput();
  }

  render() {
    // 使用 `ref` 的回调将 text 输入框的 DOM 节点存储到 React
    // 实例上（比如 this.textInput）
    return (
      <div>
        <input type="text" ref={this.setTextInputRef} />
        <button onClick={this.focusTextInput}>Focus the text input</button>
      </div>
    );
  }
}
