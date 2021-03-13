import React from 'react';
import ReactDOM from 'react-dom';
import '../main.css';
import CountAdd from './components/CountAdd';
import FriendMessges from './components/FriendMessage';
import FriendStatusWrapper from './components/FriendStatus';
import Todos from './components/Todos';
import HelloMemo from './components/HelloMemo';

function App() {
  return (
    <div>
      <div className="block">
        <h4>Hooks 简介</h4>
        <CountAdd />
      </div>
      <div className="block">
        <h4>Effect Hooks</h4>
        <FriendMessges />
      </div>
      <div className="block">
        <h4>自定义 Hooks(State Reuse)</h4>
        <FriendStatusWrapper />
      </div>
      <div className="block">
        <h4>simple reducer hooks</h4>
        <Todos />
      </div>
      <div className="block">
        <h4>memo hooks</h4>
        <HelloMemo />
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
