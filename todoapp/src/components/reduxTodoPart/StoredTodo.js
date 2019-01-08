import React, { Component } from 'react'
import Todos from '../Todos'
import AddTodo from '../AddTodo'
import { connect } from 'react-redux'
import { deleteAction, addAction } from '../../actions/storedTodoActions'

class StoredTodo extends Component {
  deleteTodo = (id) => {
    this.props.deleteStoredTodo(id);
  }
  addStoredTodo = (todo) => {
    todo.id = Math.random(); // it is bad idea, but I have not time to find a better way
    this.props.addTodo(todo);   
  }
  render() {
    const { storedTodos } = this.props;
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Stored Todo's</h1>
        <Todos todos={storedTodos} deleteTodo={this.deleteTodo} />
        <AddTodo addStoredTodo={this.addStoredTodo} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    storedTodos: state.storedTodos
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteStoredTodo: (id) => { dispatch(deleteAction(id)) },
    addTodo: (todo) => { dispatch(addAction(todo)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StoredTodo);