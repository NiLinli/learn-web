import React from 'react';
import ReactDOM from 'react-dom';
import HocDemo from './higher-order-component/HocDemo';
import MouseTracker from './render-props/MouseTracker';

function App() {
  return (
    <div>
      <h3>高阶组件</h3>
      <HocDemo />
      <h3>render props</h3>
      <MouseTracker />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));