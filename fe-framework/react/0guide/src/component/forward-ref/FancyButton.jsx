import React from 'react';

const FancyButton = React.forwardRef((props, ref) => {
  return (
    <button ref={ref} className="FancyButton" onClick={props.onClick}>
      {props.children}
    </button>
  );
});

export default function ForwardRefDemo() {
  let ref;

  function handleClick() {
    console.log(ref);
  }

  // 访问一个组件的 ref, 该 ref 会转发到组件的子组件上面去
  // 间接通过 ref 去访问一个组件的子组件
  return (
    <FancyButton ref={(element) => (ref = element)} onClick={handleClick}>
      Click me!
    </FancyButton>
  );
}
