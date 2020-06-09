import React from 'react';
import ReactDOM from 'react-dom';
import WelcomeWrapper from './components-props/WelcomeWrapper';
import EventWrapper from './handling-events/EventWrapper';
import Calculator from './lifting-state-up/Calculator';
import RefDemoWrapper from './refs-dom/RefDemoWrapper';
import Table from './fragments/Table';
import ForwardRefDemo from './forward-ref/ForwardRefDemo';
import ContextDemo from './context-consumer/ContextDemo';
import PortalsDemo from './portals/PortalsDemo';
import './main.css';

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
      <h3>fragments</h3>
      <Table />
      <h3>forward ref</h3>
      <ForwardRefDemo />
      <h3>context</h3>
      <ContextDemo />
      <h3>portals</h3>
      <PortalsDemo />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));