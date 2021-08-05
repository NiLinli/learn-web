import styled from 'styled-components';

// .iYXgWZ
const Button = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

// .iYXgWZ .lgjECl
const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato;
`;

// js 传递到 css 当中
const Text = styled.div`
  font-size: 20px;
  background-color: ${(props) => (props.active ? 'red' : 'gray')};
`;

export { Button, TomatoButton, Text };
