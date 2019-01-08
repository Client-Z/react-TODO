export const deleteAction = (id) => {
    return {
        type: 'DELETE_TODO',
        id
    }
}

export const addAction = (todo) => {
    return {
        type: 'ADD_TODO',
        todo
    }
}