import React from 'react';

export default function FancyBorder(props) {
  return (
    <div className={'FancyBorder FancyBorder-' + props.color}>
      {props.children}
      <div className="left">{props.left}</div>
      <div className="right">{props.right}</div>
    </div>
  );
}
