import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CountAdd from './components/CountAdd';

function App() {
  return (
    <div>
      <h4>Hooks 简介</h4>
      <CountAdd />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
