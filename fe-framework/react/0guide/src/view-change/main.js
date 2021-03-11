import React from 'react';
import ReactDOM from 'react-dom';
import NumberList from './components/NumberList';
import Greeting from './components/ConditionalRendering';
import UpdateState from './components/UpdateState';
import Lifecycle from './components/Lifecycle';
import Reconcliation from './components/Reconcliation'

import '../main.css';

function App() {
  return (
    <div>
      <div className="block">
        <h3>state 更新</h3>
        <UpdateState />
      </div>

      <div className="block">
        <h3>lifecycle</h3>
        <Lifecycle />
      </div>

      <div className="block">
        <h3>循环 for</h3>
        <NumberList numbers={[1, 2, 3, 4, 5, 6, 7]} />
      </div>

      <div className="block">
        <h3>条件判断 if</h3>
        <Greeting />
      </div>

      <div className="block">
        <h3>Reconcliation Fiber Node</h3>
        <Reconcliation />
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
