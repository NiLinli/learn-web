import React from 'react';
import Mouse from './Mouse';

export default function MouseTracker(props) {
  const renderFunc = (mouse) => {
    return (
      <p>
        当前的鼠标位置是 ({mouse.x}, {mouse.y})
      </p>
    );
  };
  return (
    <div>
      <h5>移动鼠标!</h5>
      <Mouse render={renderFunc} />
    </div>
  );
}
