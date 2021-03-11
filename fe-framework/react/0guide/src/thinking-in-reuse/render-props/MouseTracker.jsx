import React, { useRef } from 'react';
import Mouse from './Mouse';

export default function MouseTracker(props) {
  const mouse = useRef(null);

  // render function 获取 state
  const renderFunc = (mouse) => {
    return (
      <p>
        当前的鼠标位置是 ({mouse.x}, {mouse.y})
      </p>
    );
  };

  // ref reuse component 获取实例方法

  return (
    <div>
      <h5>移动鼠标!</h5>
      <Mouse ref={mouse} render={renderFunc} />
    </div>
  );
}
