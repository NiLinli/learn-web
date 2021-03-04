import React, { useCallback, useState } from 'react';

export default function Greeting() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showWarning, setShowWarning] = useState(false);

  const onLoginClick = useCallback(() => {
    setIsLoggedIn(true);
  });

  const onLogoutClick = useCallback(() => {
    setIsLoggedIn(false);
  });

  const onToggleWarningClick = useCallback(() => {
    setShowWarning((warning) => !warning);
  });

  // if && ?:
  const compoent = isLoggedIn ? <UserGreeting onClick={onLogoutClick} /> : <GuestGreeting onClick={onLoginClick} />;

  return (
    <div>
      {compoent}
      {/* 阻止条件渲染 */}
      <WarningBanner warn={showWarning} />
      <button onClick={onToggleWarningClick}>{showWarning ? 'Hide' : 'Show'}</button>
    </div>
  );
}

function GuestGreeting(props) {
  return (
    <div>
      <h5>Please sign up.</h5>
      <button onClick={props.onClick}>LogIn</button>
    </div>
  );
}

function UserGreeting(props) {
  return (
    <div>
      <h5>Welcome back!</h5>
      <button onClick={props.onClick}>Logout</button>
    </div>
  );
}

function WarningBanner(props) {
  // 自己控制自己是否被渲染
  // render 的时候返回 null 而不是 view
  // render 为 null 的时候并不会阻止其他生命周期的调用
  if (!props.warn) {
    return null;
  }

  return <div className="warning">Warning!</div>;
}
