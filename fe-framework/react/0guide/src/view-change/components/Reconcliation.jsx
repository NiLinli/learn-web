import React, { useCallback, useState } from 'react';

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

class Counter2 extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log('Counter2 诞生了');
  }

  componentWillUnmount() {
    console.log('Counter2 挂了');
  }

  render() {
    return <span>Counter2</span>;
  }
}

export default function Reconcliation() {
  const [counterToggle, setCounterToggle] = useState(true);
  const [name, setName] = useState('age');

  const onToggleComponentClick = useCallback(() => {
    setCounterToggle(!counterToggle);
  }, [counterToggle]);

  const onToggleInputName = useCallback(() => {
    setName(name === 'sex' ? 'age' : 'sex');
  }, [name]);

  const sameComponent = counterToggle ? (
    <div className="1">
      <Counter />
    </div>
  ) : (
    <div className="2">
      <Counter />
    </div>
  );
  const diffComponent = counterToggle ? (
    <div>
      <Counter2 />
    </div>
  ) : (
    <span>
      <Counter2 />
    </span>
  );

  // const elementInput = name === 'age' ? <input type="text" name="age" /> : <input type="text" name="sex" />;
  // 非受控组件有自己的状态, reconclier 不会检查这个内部状态, 可添加 key 区分
  const elementInput = name === 'age' ? <input type="text" name="age" key="age" /> : <input type="text" name="sex" key="sex" />;

  return (
    <div>
      {sameComponent}
      {diffComponent}
      <div>
        <button onClick={onToggleComponentClick}>切换组件</button>
      </div>
      {elementInput}
      <div>
        <button onClick={onToggleInputName}>切换Input Name</button>
      </div>
    </div>
  );
}
