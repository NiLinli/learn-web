import React, { useState, useCallback } from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log('Counter 诞生了');
  }

  componentWillUnmount() {
    console.log('Counter 挂了');
  }

  render() {
    return <span>Counter</span>;
  }
}

export default function DiffentTypes() {
  const [show, setShow] = useState(false);

  const toggleShow = useCallback(() => {
    setShow(!show);
  }, [show]);

  const element = show ? (
    <div>
      <Counter />
    </div>
  ) : (
    <span>
      <Counter />
    </span>
  );

  return (
    <div>
      {element}
      <button onClick={toggleShow}>toggleShow</button>
    </div>
  );
}
