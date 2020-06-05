import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CountAdd from './components/CountAdd';
import FriendListItem from './components/FriendListItem';
import FriendStatus from './components/FriendStatus';

function App() {
  return (
    <div>
      <h4>Hooks 简介</h4>
      <CountAdd />
      <h4>自定义 Hooks</h4>
      <FriendListItem friend={{ name: 'Brucee Lee', id: 200 }} />
      <FriendStatus friend={{ name: 'Brucee Lee', id: 200 }} />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
