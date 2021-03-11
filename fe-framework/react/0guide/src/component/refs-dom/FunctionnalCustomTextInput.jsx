import React, { useCallback, useRef } from 'react';

export class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.textInput = React.createRef();
  }

  componentDidMount() {}

  render() {
    const { count } = this.state;
    return (
      <React.Fragment>
        {/* <FunctionnalCustomTextInput ref={this.textInput} /> */}
        <FunctionnalCustomTextInput {...this.state} />
        <button onClick={() => this.setState({ count: count + 1 })}>Render</button>
      </React.Fragment>
    );
  }
}

// 1. 不能访问 函数式 组件的 ref , 因为没有
// 2. 函数式组件 可以访问其他 有 instance 的组件, 需要通过回调函数
export const FunctionnalCustomTextInput = (props) => {
  let div1, textInput;

  // 模拟 createRef 放入 class property 中
  // useRef 可以模拟实例中的任何字段属性
  const div2 = useRef(null);

  // 模拟 callback 放在 class method 中
  const setTextInputRef = useCallback(
    (element) => {
      console.log('setTextInputRef', element);
      textInput = element;
    },
    [textInput]
  );

  function handleClick() {
    console.log(textInput, div2.current);
    textInput.focus();
  }

  console.log('functional render');

  return (
    <div>
      <input type="text" ref={setTextInputRef} />

      <div
        ref={(element) => {
          // if (!element) {}
          console.log('functional setDiv1Ref', element);
          div1 = element;
        }}
      >
        div1
      </div>
      <div ref={div2}>div2</div>
      <button onClick={handleClick}>Focus the text input</button>
    </div>
  );
};
