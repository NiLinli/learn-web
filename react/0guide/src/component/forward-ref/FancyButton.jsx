import React from 'react';

// function FancyButton(props) {
//   return <button className="FancyButton">{props.children}</button>;
// }

const FancyButton = React.forwardRef((props, ref) => {
  return (
    <button ref={ref} className="FancyButton" onClick={props.onClick}>
      {props.children}
    </button>
  );
});

export default FancyButton;
