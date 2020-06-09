import React from 'react';
import ReactDOM from 'react-dom';
import WelcomeWrapper from './components-props/WelcomeWrapper';
import EventWrapper from './handling-events/EventWrapper';
import Calculator from './lifting-state-up/Calculator';
import RefDemoWrapper from './refs-dom/RefDemoWrapper';

function App() {
  return (
    <div>
      <h3>props</h3>
      <WelcomeWrapper />
      <h3>handling events</h3>
      <EventWrapper />
      <h3>lifting state up</h3>
      <Calculator />
      <h3>refs dom</h3>
      <RefDemoWrapper />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));