import { ActionTypes } from '../actions/actionTypes';

export function todos(state = [], action: any) {
    switch (action.type) {
        case ActionTypes.ADD_TODO:
            // 添加一个 Todo 
            return [
                ...state,
                {
                    id: action.id,
                    completed: false,
                    text: action.text
                }
            ];
        case ActionTypes.TOGGLE_TODO:
            // 切换 Todo 状态
            return state.map((todo, id) => {
                if (id === action.id) {
                    return Object.assign({}, todo, {
                        completed: !(todo as any).completed
                    });
                }
                return todo;
            });
        default:
            return state;
    }
}