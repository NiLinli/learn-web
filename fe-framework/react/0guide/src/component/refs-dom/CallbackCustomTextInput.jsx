import React from 'react';

export class CallbackCustomTextInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    console.log('componentDidMount');
    this.focusTextInput();
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  // React 将在组件挂载时将 DOM 元素传入ref 回调函数并调用
  // element 参数: DOM or React Component
  // callback 没变化
  // update 时候, 不会更新
  setTextInputRef = (element) => {
    console.log('setTextInputRef', element);
    this.textInput = element;
  };

  focusTextInput = () => {
    if (this.textInput) {
      this.textInput.focus();
    }
  };

  render() {
    const { count } = this.state;
    console.log('render');
    return (
      <div>
        <input type="text" ref={this.setTextInputRef} />
        <div
          ref={(element) => {
            // 渲染的时候接受是新的 callback 实例
            // update 的时候会执行两次
            // 置空老的 callback 实例, element 为 null
            // 设置新的 callback 实例, element 为 该组件/DOM

            console.log('setDivRef', element);
            this.div = element;
          }}
        >
          div
        </div>
        <button onClick={this.focusTextInput}>Focus the text input</button>
        <button onClick={() => this.setState({ count: count + 1 })}>Render</button>
      </div>
    );
  }
}
