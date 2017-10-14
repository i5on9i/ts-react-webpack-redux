
let nextTodoId = 0

export const addToHeader = (text: string) => {
  return {
    type: 'ADD_TO_HEADER',
    id: nextTodoId++,
    text
  }
}

export const setVisibilityFilter = (filter: string) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}

export const toggleTodo = (id: string) => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}