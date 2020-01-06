import * as React from 'react';
import Todo from './Todo';

interface ITodo {
    id: number;
    completed: boolean;
    text: string;
}

interface IProps {
    todos: ITodo[];
    onTodoClick: any;
}

const TodoList = ({ todos, onTodoClick }:IProps) => (
    <ul>
        {todos.map((todo, index) => (
            <Todo key={index} {...todo} onClick={() => onTodoClick(index)} />
        ))}
    </ul>
)



export default TodoList