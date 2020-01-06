import * as React from 'react';

interface IProps {
    active: boolean;
    children: any;
    onClick: any;
}

const Link = ({ active, children, onClick }:IProps) => {
  if (active) {
    return <span>{children}</span>
  }

  return (
    <a
      href=""
      onClick={e => {
        e.preventDefault()
        onClick()
      }}
    >
      {children}
    </a>
  )
}



export default Link;