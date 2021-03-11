import React, { useState, useEffect } from 'react';
import ChatAPI from './ChatAPI';

// state
// effect hooks
// function
// ...
// 实现复用代码

function useFriendStatus(friendID) {
  const [isOnline, setIsOnline] = useState(null);

  useEffect(() => {
    function handleStatus(status) {
      setIsOnline(status);
    }

    ChatAPI.subscribeToFriendStatus(friendID, handleStatus);
    return () => {
      ChatAPI.unsubscribeFromFriendStatus(friendID, handleStatus);
    };
  });

  // 返回可以返回 state + function
  return isOnline;
}

function FriendStatus(props) {
  const isOnline = useFriendStatus(props.friend.id);

  if (isOnline === null) {
    return 'Loading...';
  }
  return isOnline ? 'Online' : 'Offline';
}

function FriendListItem(props) {
  const isOnline = useFriendStatus(props.friend.id);
  return <li style={{ color: isOnline ? 'green' : 'black' }}>{props.friend.name}</li>;
}

export default function FriendStatusWrapper() {
  return (
    <>
      <FriendListItem friend={{ name: 'Brucee Lee', id: 10 }} />
      <FriendStatus friend={{ name: 'Brucee Lee', id: 20 }} />
    </>
  );
}
