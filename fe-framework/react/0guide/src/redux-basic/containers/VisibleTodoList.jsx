import { connect } from 'react-redux';
import { toggleTodo } from '../actions/actions';
import TodoList from '../components/TodoList';

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case 'SHOW_ALL':
            return todos
        case 'SHOW_COMPLETED':
            return todos.filter((t) => t.completed)
        case 'SHOW_ACTIVE':
            return todos.filter((t) => !t.completed)
    }
};

// 设定 props - @Input 读取  
const mapStateToProps = (state) => {
    console.log('mapStateToProps', state);
    return {
        todos: getVisibleTodos(state.todos, state.visibilityFilter)
    }
};

// 设定 props - @Output 分发 Action
const mapDispatchToProps = (dispatch) => {
    return {
        onTodoClick: (id) => {
            dispatch(toggleTodo(id))
        }
    }
};

const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);

export default VisibleTodoList;