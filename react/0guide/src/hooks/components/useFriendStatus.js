import { useState, useEffect } from 'react';

// 将一个 state 与操作 state 的 effect hooks 用函数封装起来
function useFriendStatus(friendID) {

  const [isOnline, setIsOnline] = useState(null);

  useEffect(() => {
    function handleStatus(status) {
      setIsOnline(status.isOnline);
    }

    console.log('订阅朋友列表在线状态');
    return () => {
      console.log('取消订阅朋友列表在线状态');
    };
  });

  return isOnline;
}

export default useFriendStatus;