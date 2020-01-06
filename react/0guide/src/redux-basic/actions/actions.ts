import { ActionTypes } from './actionTypes';
// 
export enum VisibilityFilters {
    SHOW_ALL = 'SHOW_ALL',
    SHOW_COMPLETED = 'SHOW_COMPLETED',
    SHOW_ACTIVE = 'SHOW_ACTIVE'
}

// action 创建函数 -> call 之后返回一个 action
let nextTodoId = 0;
export function addTodo(text: string) {
    return {
        type: ActionTypes.ADD_TODO,
        text,
        id: nextTodoId++
    }
}

export function toggleTodo(id: any) {
    return {
        type: ActionTypes.TOGGLE_TODO,
        id
    }
}

export function setVisibilityFilter(filter: any) {
    return {
        type: ActionTypes.SET_VISIBILITY_FILTER,
        filter
    }
}

export function changeTest(key: string, value: any):any {
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

export function logout(): any {
    return {
        type: ActionTypes.LOG_OUT,
        payload: true
    }
}