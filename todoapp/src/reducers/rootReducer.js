const initState = {
  storedTodos: [
    {id: '1', content: 'Here is the same functionality as on prev todos, but in Redux handling'},
    {id: '2', content: 'The app has 3 reusable components. I could do 4, but it can be turned to mess as I suppose'}
  ]
}

const rootReducer = (state = initState, action) => {
  if (action.type === 'DELETE_TODO') {
    let newStoredTodos = state.storedTodos.filter(todo => {
      return action.id !== todo.id
    });
    return {
      ...state,
      storedTodos: newStoredTodos
    }
  } else if (action.type === 'ADD_TODO') {
      let newStoredTodos = [ ...state.storedTodos, action.todo ];
      return {
        ...state,
        storedTodos: newStoredTodos
      }
  }
  return state;
}

export default rootReducer;