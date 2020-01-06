import * as React from 'react';

interface IProp {
    onClick: any;
    completed: boolean;
    text: string;
}

const Todo = ({ onClick, completed, text }: IProp) => (
    <li onClick= { onClick } style = { {
        textDecoration: completed ?'line-through': 'none'
    }}>
    { text }
    </li>
);

export default Todo;