import React from 'react';
import ReactDOM from 'react-dom';
import C1 from './views-change/C1';
import ClockWrapper from './state-lifecycle/ClockWrapper';
import ListWrapper from './lists-keys/ListWrapper';
import Greeting from './conditional-rendering/Greeting';
import ReconcliationDemo from './reconcliation/ReconcliationDemo';

function App() {
  return (
    <div>
      <h3>视图更新</h3>
      <C1 />
      <h3>lifecycle</h3>
      <ClockWrapper />
      <h3>key</h3>
      <ListWrapper />
      <Greeting />
      <h3>reconcliation</h3>
      <ReconcliationDemo />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));