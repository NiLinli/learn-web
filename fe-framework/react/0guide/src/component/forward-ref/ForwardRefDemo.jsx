import React from 'react';
import FancyButton from './FancyButton';

export default function ForwardRefDemo() {
  let ref;

  function handleClick() {
    console.log(ref);
  }

  return (
    <FancyButton ref={(element) => (ref = element)} onClick={handleClick}>
      Click me!
    </FancyButton>
  );
}
