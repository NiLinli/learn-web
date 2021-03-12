// 实现简单的 reducer

import React, { useReducer, useState } from 'react';

function userRuducerSimple(reducer, initialState) {
  const [state, setState] = useState(initialState);

  function dispatch(action) {
    const nextState = reducer(state, action);
    setState(nextState);
  }

  return [state, dispatch];
}

function todosReducer(state, action) {
  switch (action.type) {
    case 'add':
      return [
        ...state,
        {
          text: action.text,
          completed: false,
        },
      ];
    default:
      return state;
  }
}

function initTodo3(text) {
  return [
    {
      text: text,
      completed: false,
    },
  ];
}

export default function Todos() {
  const [todos, dispatch] = userRuducerSimple(todosReducer, []);
  const [todos2, dispatch2] = useReducer(todosReducer, []);
  const [todos3, dispatch3] = useReducer(todosReducer, '动态初始化', initTodo3);

  function onAddClick() {
    dispatch({ type: 'add', text: Math.random() });
  }

  function onAddClick2() {
    dispatch2({ type: 'add', text: Math.random() });
  }

  function onAddClick3() {
    dispatch3({ type: 'add', text: Math.random() });
  }

  return (
    <div>
      <div>Todo: {JSON.stringify(todos)}</div>
      <div>Todo2: {JSON.stringify(todos2)}</div>
      <div>Todo3: {JSON.stringify(todos3)}</div>
      <button onClick={onAddClick}>添加 Todo</button>
      <button onClick={onAddClick2}>添加 Todo2</button>
      <button onClick={onAddClick3}>添加 Todo3</button>
    </div>
  );
}
