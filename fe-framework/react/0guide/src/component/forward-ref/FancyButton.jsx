import React, { useRef, useImperativeHandle } from 'react';

// 将父元素 ref 透传到子元素上
// 父元素和子元素 ref 是一个引用
const FancyButton = React.forwardRef((props, ref) => {
  return (
    <button ref={ref} className="FancyButton" onClick={props.onClick}>
      {props.children}
    </button>
  );
});

const UnFancyButton = React.forwardRef((props, ref) => {
  // 父组件转发过来的为 ref

  // 本地新建一个 buttonRef
  const buttonRef = useRef(null);

  function dosomeOtherthing() {
    console.log('onDoSomething');
  }

  useImperativeHandle(
    // 父级 ref 调用方法时候, 因为没有透传, 所以 ref 调用转发
    ref,
    () => {
      return {
        showButton: () => {
          console.log(buttonRef);
        },
        dosomeOtherthing: () => {
          dosomeOtherthing();
        },
      };
    },
    []
  );

  return (
    <button ref={buttonRef} className="unFancyButton" onClick={props.onClick}>
      {props.children}
    </button>
  );
});

export default function ForwardRefDemo() {
  let fancyButtonRef, unFancyButtonRef;

  function handleClick() {
    console.log(fancyButtonRef);
  }
  return (
    <>
      <FancyButton ref={(element) => (fancyButtonRef = element)} onClick={handleClick}>
        Click me!
      </FancyButton>
      <UnFancyButton ref={(element) => (unFancyButtonRef = element)}>
        Look at me!
      </UnFancyButton>

      <button onClick={() => unFancyButtonRef.showButton()}>showButton</button>
      <button onClick={() => unFancyButtonRef.dosomeOtherthing()}>dosomeOtherthing</button>
    </>
  );
}
