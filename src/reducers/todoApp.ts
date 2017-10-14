

import { combineReducers } from 'redux'


export const todos = (state: any[] = [], action:any) => {
    switch (action.type) {
        case 'ADD_TO_HEADER':
            return [
                ...state,
                {
                id: action.id,
                text: action.text,
                completed: false
                }
            ]
        case 'TOGGLE_TODO':
            return state.map(todo =>
                (todo.id === action.id) 
                ? {...todo, completed: !todo.completed}
                : todo
            )
        default:
            return state
    }
}

export const visibilityFilter = (state = 'SHOW_ALL', action: any) => {
    switch (action.type) {
        case 'SET_VISIBILITY_FILTER':
           return action.filter
        default:
            return state
    }
}

export const todoApp = combineReducers({
    todos,
    visibilityFilter
})