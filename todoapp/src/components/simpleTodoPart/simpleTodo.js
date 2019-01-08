import React, { Component } from 'react';
import Todos from '../Todos';
import AddTodo from '../AddTodo';

class SimpleTodo extends Component {
  state = {
    todos: [
      {id: 1, content: 'Here is a todolist without any store'},
      {id: 2, content: 'You can go to todos which handle by redux via header'},
      {id: 3, content: 'Click on todos for deleting them'}
    ]
  }
  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    });
    this.setState({
      todos
    });
  }
  addTodo = (todo) => {
    todo.id = Math.random(); // it is bad idea, but I have not time to find a better way
    let todos = [...this.state.todos, todo];
    this.setState({
      todos
    });
  }
  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todo's</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <AddTodo addTodo={this.addTodo} />
      </div>
    );
  }
}

export default SimpleTodo;