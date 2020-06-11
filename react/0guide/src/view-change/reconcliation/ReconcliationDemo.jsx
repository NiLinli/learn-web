import React from 'react';
import DiffentTypes from './DiffentTypes';
import SameTypes from './SameTypes';

function ReconcliationDemo(props) {
  return (
    <div>
      <h5>不同类型</h5>
      <DiffentTypes />
      <h5>相同类型</h5>
      <SameTypes />
    </div>
  );
}

export default ReconcliationDemo;
