import * as  ActionTypes from './actionTypes';



// action 创建函数 -> call 之后返回一个 action
let nextTodoId = 0;
export function addTodo(text) {
    return {
        type: ActionTypes.ADD_TODO,
        text,
        id: nextTodoId++
    }
}

export function toggleTodo(id) {
    return {
        type: ActionTypes.TOGGLE_TODO,
        id
    }
}

export function setVisibilityFilter(filter) {
    return {
        type: ActionTypes.SET_VISIBILITY_FILTER,
        filter
    }
}

export function changeTest(key, value) {
    if (key === 'name') {
        return {
            type: ActionTypes.CHANGE_NAME,
            payload: value
        }
    } else if (key === 'age') {
        return {
            type: ActionTypes.CHANGE_AGE,
            payload: value
        }
    }
}

export function logout() {
    return {
        type: ActionTypes.LOG_OUT,
        payload: true
    }
}