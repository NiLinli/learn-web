import React, { useState, useEffect } from 'react';
import useFriendStatus from './useFriendStatus';

function FriendListItem(props) {
  const isOnline = useFriendStatus(props.friend.id);
  return <li style={{ color: isOnline ? 'green' : 'black' }}>{props.friend.name}</li>;
}

export default FriendListItem;
