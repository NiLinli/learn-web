import React from 'react';

export function WarningBanner(props) {
  // 自己控制自己是否被渲染
  // render 的时候返回 null 而不是 view
  // render 为 null 的时候并不会阻止其他生命周期的调用
  if (!props.warn) {
    return null;
  }

  return <div className="warning">Warning!</div>;
}
