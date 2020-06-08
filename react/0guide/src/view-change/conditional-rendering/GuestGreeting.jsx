import React from 'react';

export function GuestGreeting(props) {
  return (
    <div>
      <h5>Please sign up.</h5>
      <button onClick={props.onClick}>LogIn</button>
    </div>
  );
}
