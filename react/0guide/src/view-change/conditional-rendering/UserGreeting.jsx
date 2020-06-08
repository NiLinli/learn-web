import React from 'react';

export function UserGreeting(props) {
  return (
    <div>
      <h5>Welcome back!</h5>
      <button onClick={props.onClick}>Logout</button>
    </div>
  );
}
