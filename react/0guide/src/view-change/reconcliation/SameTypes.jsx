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

export default function SameTypes() {
  const [show, setShow] = useState(false);

  const [name, setName] = useState('age');

  const toggleShow = useCallback(() => {
    setShow(!show);
  }, [show]);

  const toggleName = useCallback(() => {
    setName('sex');
  }, [name]);

  const element1 = show ? (
    <div className="counter-wrapper">
      <Counter />
    </div>
  ) : (
    <div className="counter-container">
      <Counter />
    </div>
  );

  const element2 = name === 'age' ? <input type="text" name="age" /> : <input type="text" name="sex" />;
  // const element2 = name === 'age' ? <input type="text" name="age" key="age" /> : <input type="text" name="sex" key="sex" />;

  return (
    <div>
      {element1}
      <button onClick={toggleShow}>toggleClassName</button>

      {element2}
      <button onClick={toggleName}>toggleInputName</button>
    </div>
  );
}
