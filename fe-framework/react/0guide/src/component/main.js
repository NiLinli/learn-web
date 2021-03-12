import React from 'react';
import ReactDOM from 'react-dom';
import WelcomeWrapper from './components-props/WelcomeWrapper';
import EventWrapper from './handling-events/EventWrapper';
import Calculator from './lifting-state-up/Calculator';
import RefDemoWrapper from './refs-dom/RefDemoWrapper';
import ForwardRefDemo from './forward-ref/FancyButton';
import Table from './fragments/Table';
import AppContext from './context-consumer/AppContext';
import PortalsDemo from './portals/PortalsDemo';
import PureDemo from './pure/PureDemo';
import MemoDemo from './memo/MemoDemo';
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
        <AppContext />
      </div>
      <div className="block">
        <h3>portals</h3>
        <PortalsDemo />
      </div>
      <div className="block">
        <h3>PureComponent</h3>
        <PureDemo />
      </div>
      <div className="block">
        <h3>memo</h3>
        <MemoDemo />
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
