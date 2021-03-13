import React from 'react';
import Counter from './Counter';
import CounterWithRedux from './CounterWithRedux';

export default function Demo() {
  return (
    <div>
      <h3>Counter</h3>
      <Counter />
      <h3>Counter with redux</h3>
      <CounterWithRedux />
    </div>
  )
}

