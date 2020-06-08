import React from 'react';
import ReactDOM from 'react-dom';
import WelcomeWrapper from './components-props/WelcomeWrapper';
import EventWrapper from './handling-events/EventWrapper';
import Calculator from './lifting-state-up/Calculator'

function App() {
  return (
    <div>
      <h3>props</h3>
      <WelcomeWrapper />
      <h3>handling events</h3>
      <EventWrapper />
      <h3>lifting state up</h3>
      <Calculator />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));