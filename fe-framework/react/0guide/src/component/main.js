import React from 'react';
import ReactDOM from 'react-dom';
import WelcomeWrapper from './components-props/WelcomeWrapper';
import EventWrapper from './handling-events/EventWrapper';
import Calculator from './lifting-state-up/Calculator';
import RefDemoWrapper from './refs-dom/RefDemoWrapper';
import ForwardRefDemo from './forward-ref/FancyButton';
import Table from './fragments/Table';
import ContextDemo from './context-consumer/ContextDemo';
import PortalsDemo from './portals/PortalsDemo';
import '../main.css';

function App() {
  return (
    <div>
      <div className="block">
        <h3>props</h3>
        <WelcomeWrapper />
      </div>
      <div className="block">
        <h3>handling events</h3>
        <EventWrapper />
      </div>
      <div className="block">
        <h3>lifting state up</h3>
        <Calculator />
      </div>
      <div className="block">
        <h3>refs dom</h3>
        <RefDemoWrapper />
      </div>
      <div className="block">
        <h3>forward ref</h3>
        <ForwardRefDemo />
      </div>
      <div className="block">
        <h3>fragments</h3>
        <Table />
      </div>
      <div className="block">
        <h3>context</h3>
        <ContextDemo />
      </div>
      <div className="block">
        <h3>portals</h3>
        <PortalsDemo />
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
